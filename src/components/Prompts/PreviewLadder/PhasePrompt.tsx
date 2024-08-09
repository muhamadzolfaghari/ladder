"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  List,
  ListItem,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function PhasePrompt() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const theme = useTheme();
  
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}
      mb={2}
    >
      <Accordion
        defaultExpanded
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          sx={{
            backgroundColor: expanded === "panel1" ? "#22983C" : "#526350",
          }}
          expandIcon={
            expanded === "panel1" ? (
              <ArrowDropDownIcon
                fontSize="large"
                sx={{ color: theme.palette.primary.contrastText }}
              />
            ) : (
              <ArrowRightIcon
                fontSize="large"
                sx={{ color: theme.palette.primary.contrastText }}
              />
            )
          }
        >
          <Typography>Phase 1: Foundations (Months 1-3)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ mt: 2, mb: 3 }}>
            <Typography variant="h5">Weekly Schedule:</Typography>
            <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
              <ListItem sx={{ display: "list-item", p: 0 }}>
                Weekdays (2 hours/day):
                <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
                  <ListItem sx={{ display: "list-item", p: 0 }}>
                    1 hour: Online course (HTML, CSS, JavaScript basics) –
                    Codecademy or Udemy.
                  </ListItem>
                  <ListItem sx={{ display: "list-item", p: 0 }}>
                    1 hour: Practice coding on freeCodeCamp or similar
                    platforms.
                  </ListItem>
                </List>
              </ListItem>
            </List>
            <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
              <ListItem sx={{ display: "list-item", p: 0 }}>
                Weekends (4 hours/day):
                <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
                  <ListItem sx={{ display: "list-item", p: 0 }}>
                    2 hours: Reading and taking notes from recommended books
                    (e.g., &quot; HTML & CSS: Design and Build Websites &quot;
                    by Jon Duckett).
                  </ListItem>
                  <ListItem sx={{ display: "list-item", p: 0 }}>
                    2 hours: Building small projects (e.g., personal website,
                    simple games).
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </Box>
          <Box sx={{ mt: 2, mb: 3 }}>
            <Typography variant="h5">Key Topics:</Typography>
            <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
              <ListItem sx={{ display: "list-item", p: 0 }}>
                HTML5: Elements, attributes, forms, semantic HTML.
              </ListItem>
              <ListItem sx={{ display: "list-item", p: 0 }}>
                CSS3: Selectors, properties, layouts (Flexbox, Grid),
                animations.
              </ListItem>
              <ListItem sx={{ display: "list-item", p: 0 }}>
                JavaScript: Syntax, variables, functions, DOM manipulation,
                events.
              </ListItem>
            </List>
          </Box>
          <Box sx={{ mt: 2, mb: 3 }}>
            <Typography variant="h5">Resources:</Typography>
            <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
              <ListItem sx={{ display: "list-item", p: 0 }}>
                Courses: Codecademy HTML/CSS, JavaScript.
              </ListItem>
              <ListItem sx={{ display: "list-item", p: 0 }}>
                CSS3: Selectors, properties, layouts (Flexbox, Grid),
                animations.
              </ListItem>
              <ListItem sx={{ display: "list-item", p: 0 }}>
                JavaScript: Syntax, variables, functions, DOM manipulation,
                events.
              </ListItem>
            </List>
          </Box>
        </AccordionDetails>
      </Accordion>

      <div>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            sx={{
              backgroundColor: expanded === "panel2" ? "#22983C" : "#526350",
            }}
            expandIcon={
              expanded === "panel1" ? (
                <ArrowDropDownIcon
                  fontSize="large"
                  sx={{ color: theme.palette.primary.contrastText }}
                />
              ) : (
                <ArrowRightIcon
                  fontSize="large"
                  sx={{ color: theme.palette.primary.contrastText }}
                />
              )
            }
          >
            <Typography>Phase 1: Foundations (Months 1-3)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ mt: 2, mb: 3 }}>
              <Typography variant="h5">Weekly Schedule:</Typography>
              <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
                <ListItem sx={{ display: "list-item", p: 0 }}>
                  Weekdays (2 hours/day):
                  <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
                    <ListItem sx={{ display: "list-item", p: 0 }}>
                      1 hour: Online course (HTML, CSS, JavaScript basics) –
                      Codecademy or Udemy.
                    </ListItem>
                    <ListItem sx={{ display: "list-item", p: 0 }}>
                      1 hour: Practice coding on freeCodeCamp or similar
                      platforms.
                    </ListItem>
                  </List>
                </ListItem>
              </List>
              <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
                <ListItem sx={{ display: "list-item", p: 0 }}>
                  Weekends (4 hours/day):
                  <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
                    <ListItem sx={{ display: "list-item", p: 0 }}>
                      2 hours: Reading and taking notes from recommended books
                      (e.g., &quot; HTML & CSS: Design and Build Websites &quot;
                      by Jon Duckett).
                    </ListItem>
                    <ListItem sx={{ display: "list-item", p: 0 }}>
                      2 hours: Building small projects (e.g., personal website,
                      simple games).
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </Box>
            <Box sx={{ mt: 2, mb: 3 }}>
              <Typography variant="h5">Key Topics:</Typography>
              <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
                <ListItem sx={{ display: "list-item", p: 0 }}>
                  HTML5: Elements, attributes, forms, semantic HTML.
                </ListItem>
                <ListItem sx={{ display: "list-item", p: 0 }}>
                  CSS3: Selectors, properties, layouts (Flexbox, Grid),
                  animations.
                </ListItem>
                <ListItem sx={{ display: "list-item", p: 0 }}>
                  JavaScript: Syntax, variables, functions, DOM manipulation,
                  events.
                </ListItem>
              </List>
            </Box>
            <Box sx={{ mt: 2, mb: 3 }}>
              <Typography variant="h5">Resources:</Typography>
              <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
                <ListItem sx={{ display: "list-item", p: 0 }}>
                  Courses: Codecademy HTML/CSS, JavaScript.
                </ListItem>
                <ListItem sx={{ display: "list-item", p: 0 }}>
                  CSS3: Selectors, properties, layouts (Flexbox, Grid),
                  animations.
                </ListItem>
                <ListItem sx={{ display: "list-item", p: 0 }}>
                  JavaScript: Syntax, variables, functions, DOM manipulation,
                  events.
                </ListItem>
              </List>
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            sx={{
              backgroundColor: expanded === "panel3" ? "#22983C" : "#526350",
            }}
            expandIcon={
              expanded === "panel3" ? (
                <ArrowDropDownIcon
                  fontSize="large"
                  sx={{ color: theme.palette.primary.contrastText }}
                />
              ) : (
                <ArrowRightIcon
                  fontSize="large"
                  sx={{ color: theme.palette.primary.contrastText }}
                />
              )
            }
          >
            <Typography>Phase 1: Foundations (Months 1-3)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ mt: 2, mb: 3 }}>
              <Typography variant="h5">Weekly Schedule:</Typography>
              <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
                <ListItem sx={{ display: "list-item", p: 0 }}>
                  Weekdays (2 hours/day):
                  <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
                    <ListItem sx={{ display: "list-item", p: 0 }}>
                      1 hour: Online course (HTML, CSS, JavaScript basics) –
                      Codecademy or Udemy.
                    </ListItem>
                    <ListItem sx={{ display: "list-item", p: 0 }}>
                      1 hour: Practice coding on freeCodeCamp or similar
                      platforms.
                    </ListItem>
                  </List>
                </ListItem>
              </List>
              <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
                <ListItem sx={{ display: "list-item", p: 0 }}>
                  Weekends (4 hours/day):
                  <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
                    <ListItem sx={{ display: "list-item", p: 0 }}>
                      2 hours: Reading and taking notes from recommended books
                      (e.g., &quot; HTML & CSS: Design and Build Websites &quot;
                      by Jon Duckett).
                    </ListItem>
                    <ListItem sx={{ display: "list-item", p: 0 }}>
                      2 hours: Building small projects (e.g., personal website,
                      simple games).
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </Box>
            <Box sx={{ mt: 2, mb: 3 }}>
              <Typography variant="h5">Key Topics:</Typography>
              <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
                <ListItem sx={{ display: "list-item", p: 0 }}>
                  HTML5: Elements, attributes, forms, semantic HTML.
                </ListItem>
                <ListItem sx={{ display: "list-item", p: 0 }}>
                  CSS3: Selectors, properties, layouts (Flexbox, Grid),
                  animations.
                </ListItem>
                <ListItem sx={{ display: "list-item", p: 0 }}>
                  JavaScript: Syntax, variables, functions, DOM manipulation,
                  events.
                </ListItem>
              </List>
            </Box>
            <Box sx={{ mt: 2, mb: 3 }}>
              <Typography variant="h5">Resources:</Typography>
              <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
                <ListItem sx={{ display: "list-item", p: 0 }}>
                  Courses: Codecademy HTML/CSS, JavaScript.
                </ListItem>
                <ListItem sx={{ display: "list-item", p: 0 }}>
                  CSS3: Selectors, properties, layouts (Flexbox, Grid),
                  animations.
                </ListItem>
                <ListItem sx={{ display: "list-item", p: 0 }}>
                  JavaScript: Syntax, variables, functions, DOM manipulation,
                  events.
                </ListItem>
              </List>
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
    </Box>
  );
}
