import { useState } from 'react';
import {
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@mui/material';
import PageTitle from 'ui-component/PageTitle';
import { IconHelp } from '@tabler/icons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    title: 'FAQ 1',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum laboriosam quos aperiam. Distinctio quae dicta placeat unde dignissimos, iusto eos fuga officia minima eligendi facere, magni porro doloremque modi?'
  },
  {
    title: 'FAQ 2',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum laboriosam quos aperiam. Distinctio quae dicta placeat unde dignissimos, iusto eos fuga officia minima eligendi facere, magni porro doloremque modi?'
  },
  {
    title: 'FAQ 3',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum laboriosam quos aperiam. Distinctio quae dicta placeat unde dignissimos, iusto eos fuga officia minima eligendi facere, magni porro doloremque modi?'
  },
  {
    title: 'FAQ 4',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum laboriosam quos aperiam. Distinctio quae dicta placeat unde dignissimos, iusto eos fuga officia minima eligendi facere, magni porro doloremque modi?'
  },
  {
    title: 'FAQ 5',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eum laboriosam quos aperiam. Distinctio quae dicta placeat unde dignissimos, iusto eos fuga officia minima eligendi facere, magni porro doloremque modi?'
  }
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Grid container spacing={2}>
      <PageTitle title="FAQ" icon={IconHelp} />
      <Grid container justifyContent="center" sx={{ my: 3 }}>
        <Grid item xs={10}>
          {faqs.map((faq, i) => (
            <Accordion
              key={i}
              expanded={expanded === `panel${i}`}
              onChange={handleChange(`panel${i}`)}
              sx={{ boxShadow: 4, mb: 0.3 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ flexShrink: 0, py: 1.5 }} variant="h4">
                  {faq.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.content}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FAQ;
