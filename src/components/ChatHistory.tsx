// app/components/ChatHistory.tsx
import React from 'react';
import { Box, List, ListItem, ListItemText, Typography, Card, CardContent, Grid } from '@mui/material';

interface ChatHistoryProps {
  messages: { text: string; date: string }[];
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages }) => {
  return (
    <Box my={2}>
      <Typography variant="h5"  >Chat History</Typography>
      <List >
        {messages.map((msg, index) => (
          <ListItem key={index} sx={{paddingX:"0px",}}>
            <Card variant="outlined"  style={{ width: '100%',  }}>
              <CardContent >
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item xs={8}>
                    <Typography variant='body1' >{msg.text}</Typography>
                  </Grid>
                  <Grid item xs={4} style={{ textAlign: 'right' }}>
                    <Typography variant="body1">{msg.date}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatHistory;
