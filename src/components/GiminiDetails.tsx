import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { Highlight, themes } from "prism-react-renderer";
import Link from "next/link";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import GeminiTools from "./GeminiTools";
import geminiIcon from "../../public/icons/gimini-icon.svg";
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
        <Image width={42} height={42} src={geminiIcon.src} alt="Gimini" />
        <Typography variant="h5" sx={{ marginLeft: 1 }}>
          Gemini 1.5
        </Typography>
      </Box>
      {/* describtion */}
      
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

      <GeminiTools text="Copied to Clipboard" />
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
