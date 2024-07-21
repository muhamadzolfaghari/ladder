import React from "react";
import { Box, Button, IconButton, SvgIcon, Typography } from "@mui/material";
import Image from "next/image";
import { Highlight, themes } from "prism-react-renderer";
import Link from "next/link";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

interface CodeSnippetProps {
  code: string;
}

const GiminiDetails = () => {
  const codeSnippet = `
    public static boolean createDatedFile(String filePath) throws IOException {
        // Check for null or empty path
        if (filePath == null || filePath isEmpty()) {
            throw new IllegalArgumentException("Path cannot be null or empty");
        }

        // Get current date with leading zeros for consistent formatting
        LocalDate today = LocalDate.now();
        String formattedDate = today.format(DateTimeFormatter.ofPattern("yyyyMMdd"));

        // Construct filename with path and extension (assuming desired extension)
        String fileName = filePath + "/" + formattedDate + ".txt";

        // Create the file
        Path file = Path.of(fileName);
        Files.createFile(file);

        return true;
    }
    `;

  return (
    <Box>
      <Box display="flex" alignItems="left" width="100%" mt={2}>
        <Image
          width={42}
          height={42}
          src="/ICONS/gimini-icon.svg"
          alt="Gimini"
        />
        <Typography variant="h5" sx={{ marginLeft: 1 }}>
          Gemini 1.5
        </Typography>
      </Box>
      <Typography variant="body1" mb={2}>
        Here&#39;s a Java function that takes a path as input and creates a file
        storing the current system date, considering edge cases:
      </Typography>
      <CodeSnippet code={codeSnippet} />
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        justifyContent="space-between"
        mt={2}
      >
        <Box display="flex" alignItems="left" color="secondary">
          <Typography variant="body1" fontSize={13} paddingRight={0.5}>
            use code
          </Typography>
          <Link
            href="/"
            passHref
            style={{ color: "#2D322C", fontSize: "13px" }}
          >
            with caution
          </Link>
        </Box>
        <IconButton>
          <ContentCopyOutlinedIcon fontSize="small" />
        </IconButton>
      </Box>
      {/* describtion */}
      <Box mt={2}>
        <Typography variant="body1" paragraph>
          1. Explanation:
          <br />
          Function signature: createDatedFile String filePath takes a string
          representing the file path. It throws an IOException if there is an
          issue creating the file.
        </Typography>
        <Typography variant="body1" paragraph>
          2. Null/Empty path check:
          <br />
          It throws an IllegalArgumentException if the provided path is null or
          empty.
        </Typography>
        <Typography variant="body1" paragraph>
          3. Get current date:
          <br />
          Uses LocalDate.now to get the current date. Formats the date using
          DateTimeFormatter.ofPatternyyyyMMddfor consistent YYYYMMDD format.
        </Typography>
        <Typography variant="body1" paragraph>
          4. Construct filename:
          <br />
          Combines the provided path, formatted date, and a desired extension
          txt in this case.
        </Typography>
        <Typography variant="body1" paragraph>
          5. Create the file:
          <br />
          Uses Path.of fileNameto create a Path object representing the file.
          Uses Files.createFile file to create the file at the specified path.
        </Typography>
        <Typography variant="body1" paragraph>
          6. Return value:
          <br />
          Returns true if the file is created successfully.
        </Typography>
        <Typography variant="body1" paragraph>
          Edge cases handled:
          <br />
          Null or empty path: Throws an IllegalArgumentException for clarity.
          Existing file: <code>Files.createFile</code> throws an IOException if
          the file already exists. You can modify the function to handle this
          case (e.g., by appending a counter to the filename).
        </Typography>
      </Box>

      {/* share */}
      <Box
        sx={{ display: "flex", justifyContent: "space-around", marginTop: 2 }}
        alignContent="center"
      >
        <IconButton>
          <ContentCopyOutlinedIcon />
        </IconButton>
        <Link href="/" passHref>
          <Image
            width={24}
            height={24}
            src="/ICONS/google-icon.svg"
            alt="G-MAIL"
          />
        </Link>
        <IconButton>
          <TuneOutlinedIcon sx={{ transform: "rotate(90deg)" }} />
        </IconButton>
        <IconButton>
          <ShareOutlinedIcon />
        </IconButton>
        <IconButton>
          <SvgIcon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.7466 9.0412L5.49656 3.0412C5.3835 3.00184 5.26266 2.99012 5.14415 3.00702C5.02563 3.02392 4.91288 3.06894 4.81532 3.13832C4.71777 3.2077 4.63823 3.29943 4.58338 3.40584C4.52852 3.51224 4.49993 3.63023 4.5 3.74995V20.25C4.5 20.4489 4.57902 20.6396 4.71967 20.7803C4.86032 20.9209 5.05109 21 5.25 21C5.44891 21 5.63968 20.9209 5.78033 20.7803C5.92098 20.6396 6 20.4489 6 20.25V16.2834L22.7466 10.4587C22.8939 10.4077 23.0217 10.312 23.1122 10.185C23.2026 10.058 23.2513 9.90589 23.2513 9.74995C23.2513 9.594 23.2026 9.44194 23.1122 9.31491C23.0217 9.18788 22.8939 9.0922 22.7466 9.0412ZM6 14.6953V4.80464L20.2172 9.74995L6 14.6953Z"
                fill="#2D322C"
              />
            </svg>
          </SvgIcon>
        </IconButton>
      </Box>
    </Box>
  );
};

export default GiminiDetails;

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#181D17",
        borderRadius: 4,
        overflowY: "auto",
      }}
    >
      <Highlight code={code} language="tsx" theme={themes.vsDark}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={{ ...style, backgroundColor: "transparent" }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};
