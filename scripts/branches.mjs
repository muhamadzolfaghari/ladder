import simpleGit from "simple-git";
import inquirer from "inquirer";

const git = simpleGit();

const FILTER_RANGES = {
  ONE_MONTH: "one-month",
  TWO_MONTHS: "two-months",
  THREE_MONTHS: "three-months",
  MORE_THAN_SIX_MONTHS: "six-months-plus",
  ALL: "all",
};

const FILTER_PROMPT = {
  type: "list",
  name: "filterBy",
  message: "How would you like to display branches?",
  choices: [
    { name: "1 month", value: FILTER_RANGES.ONE_MONTH },
    { name: "2 months", value: FILTER_RANGES.TWO_MONTHS },
    { name: "3 months", value: FILTER_RANGES.THREE_MONTHS },
    { name: "6 months+", value: FILTER_RANGES.MORE_THAN_SIX_MONTHS },
    { name: "all", value: FILTER_RANGES.ALL },
  ],
};

const DELETE_PROMPT = {
  type: "confirm",
  name: "deleteConfirm",
  message: "Do you want to delete branches?",
};

const ERROR_MESSAGE = "Error fetching branches:";
const BRANCH_DELETED_MESSAGE = "{count} branches are deleted";
const BRANCH_DELETE_CANCEL_MESSAGE = "Deleting process is canceled";

/**
 * @typedef {object} Branch
 * @property {string} name
 * @property {Date} date
 */

/**
 *
 * @return {Promise<Awaited<Branch>[]>}
 */
async function fetchBranches() {
  try {
    const branchSummary = await git.branch();
    const branchList = branchSummary.all;

    return Promise.all(
      branchList.map(async (branch) => {
        const log = await git.log([branch]);
        return { name: branch, date: new Date(log.latest.date) };
      })
    );
  } catch (error) {
    console.error(ERROR_MESSAGE, error);
    process.exit(1);
  }
}

/**
 *
 * @param branchDate {Date}
 * @param filterBy {FILTER_RANGES}
 */
const isDateInRange = (branchDate, filterBy) => {
  const date = new Date();

  switch (filterBy) {
    case FILTER_RANGES.ONE_MONTH:
      date.setDate(date.getDate() - 1);
      return branchDate.getTime() < date.getTime();
    case FILTER_RANGES.TWO_MONTHS:
      date.setDate(date.getDate() - 2);
      return branchDate.getTime() < date.getTime();
    case FILTER_RANGES.THREE_MONTHS:
      date.setDate(date.getDate() - 3);
      return branchDate.getTime() < date.getTime();
    case FILTER_RANGES.MORE_THAN_SIX_MONTHS:
      return
    case FILTER_RANGES.ALL:
      return;
  }
};

async function getBranches() {
  const { filterBy } = await inquirer.prompt([FILTER_PROMPT]);

  const branches = await fetchBranches();
  const newBranches = branches.filter((branch) =>
    isDateInRange(branch.date, filterBy)
  );

  return newBranches.sort((a, b) => b.date - a.date);
}

/**
 *
 * @param branches {Branch[]}
 * @return {Promise<void>}
 */
async function deleteBranches(branches) {
  const { deleteConfirm } = await inquirer.prompt([DELETE_PROMPT]);

  if (deleteConfirm) {
    console.log(
      BRANCH_DELETED_MESSAGE.replace("{count}", String(branches.length))
    );
  } else {
    console.log();
  }
}

async function main() {
  const branches = await getBranches();
  branches.forEach(branch => {
    console.log(`branch ${branch.name} commited at: ${branch.date}`);
  })
  await deleteBranches(branches);
}

main();
