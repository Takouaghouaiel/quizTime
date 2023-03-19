import React, {Component , useState, useEffect } from 'react';
import './question.css';


import Button from 'react-bootstrap/Button';
import avatar from './avatar.svg';
import log from './log.svg'
import Form from 'react-bootstrap/Form';
import hiss from './hiss.svg';
import { questions } from './questions';


import Badge from './Badge.png';
 
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import { Button } from '@material-ui/core';
import styled from '@material-ui/styles/styled';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { margin } from '@mui/system';
  
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    background: {
      default: '#f2f2f2',
    },
  },
  typography: {
    fontSize: 25,
    fontFamily: 'Poppins',
    fontWeightLight: 700,
    fontWeightRegular: 700,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiDialogContentText-root': {
      fontSize: '35px',
      fontWeight: '700',
      lineHeight: '1',
      letterSpacing: '0.15px',
      color: 'Black',
    },
  },
  dialogBox: {
    backgroundColor: '#f5f5f5',
    borderRadius: '25px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    width:'500px',
    height:'450px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding:'15px',
    margin:'100px',
  },
}));


function History () {
  const [hasClickedReview, setHasClickedReview] = useState(false);
  //  the state of cureent question is set to 0
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // the state of the dialog is closed initially 
  const [open, setOpen] = useState(false);

  // passer au question suivant
  const handleNextQuestion = () => {
    if (currentQuestion + 1 === questions.length) {
      setOpen(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  // a function to close the dialog if opened and we can call it later 
  const handleClose = () => {
    setOpen(false);
  };

  // selected answers 

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleSelectAnswer = (questionId, answerId) => {
    setSelectedAnswers(prevSelectedAnswers => ({
      ...prevSelectedAnswers,
      [questionId]: answerId,
    }));
  };
  const initialcontent ='Are you sure you want to submit the Quiz?';
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [content, setContent] = useState(initialcontent);

  const handleYesClick = () => {
    if (hasSubmitted) {
      if (score >= 80) {
        setContent('Congratulations!');
      } else {
        setContent('Unfortunately, you did not pass.');
      }
    } else{
      setHasSubmitted(true);
      
           }
           if (hasSubmitted && !hasClickedReview) {
            setHasClickedReview(true);
            handleClose(); 
          }
          
          submitQuiz(content); 
               
           
  };
  
  const submitQuiz = (content) => {
    // Count the number of correct answers
    console.log(selectedAnswers);
    let numCorrect = 0;
    questions.forEach((question) => {
      Object.keys(selectedAnswers).forEach((key) => {
        // console.log('the selected answer is ',selectedAnswers[key])
        // console.log('the correct answer is ',question.correctAnswer)
        if (selectedAnswers[key]=== question.correctAnswer) {
          numCorrect++;
        }
      })
    });
     // Calculate the score as a percentage
     const quizScore = (numCorrect / questions.length) * 100;
     setScore(quizScore);
    console.log('number of corrected answers',numCorrect);
    console.log(`Quiz submitted with a score of ${quizScore}%`);
    console.log(content);
    
  };
  
  

  //  call the style function 
  const classes = useStyles();

    // timer
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }


    return (
      
        <div className="container">
            <div >

        <h3 > Quiz Time</h3>
        
        <div className="search-container">
              {/* <img src={search} alt="search" className="search-icon"/> */}

              <Form.Control
                type="search"
                placeholder="Search.."
                className="search-input"
                aria-label="Search"
              />
           </div>

     <div className="customcontainer">         
        <Button variant="outline-secondary">Start Quiz</Button>{' '}
        </div > 
        {/* <div className="avatarcontainer">
        <img src={avatar} className="avatar" alt="Oluwatobi" />
        <span className="avatarname">Oluwatobi..</span>
        </div> */}

        </div>
        
        <div className="btngroup"> 
        <Button className="dash">
        {/* <img src={Vector} alt="dashboard" className="icon" style={{ marginRight: '25px'}}/> */}
          Dashboard</Button>
        <Button className="support">
        {/* <img src={support} alt="support" className="icon" style={{ marginRight: '25px'}}/> */}
          Support</Button>

        <Button className="notification">
        {/* <span className="icon"><img src={notif} alt="notif" className="icon" style={{ marginRight: '25px'}} /></span> */}
          Notifications</Button>
         </div>
        <Button className="btnlog">
        <img src={log} alt="logout" className="icon" style={{ marginRight: '25px'}} />
          Log Out</Button>
         
        
        <div className="box">
        <div className='timer'>
              <h3>Timer:{formatTime(seconds)}Mins</h3>
           </div>
            <div>
              <div  className="ques">

        <FormControl component="fieldset">
      <FormLabel component="legend"><h2>Question {currentQuestion+1}/{questions.length }</h2></FormLabel>
      <p>{questions[currentQuestion].question}</p>
      </FormControl>
        </div>
        <h3>History Quiz</h3>
        <h4>Read the folowing instructions </h4>
        <img src={hiss} alt="his" />
        </div>
        
        <div className='radio'>
        <FormControl component="fieldset">
  <h2>Choose Answer<FormLabel  component="legend"></FormLabel></h2>
  <RadioGroup
     className='radiooption'
    aria-labelledby="question"
    name={`question${currentQuestion}`}
  >
    
  {questions[currentQuestion].incorrectAnswers.concat(questions[currentQuestion].correctAnswer).map((option) => (
   
   <FormControlLabel 
      key={option}
      value={option}
      checked={selectedAnswers[currentQuestion] === option}
      onChange={(event) => handleSelectAnswer(currentQuestion, event.target.value)}
      control={<Radio/>}
      label={
        <span 
          style={{color: hasClickedReview && option === questions[currentQuestion].correctAnswer ? 'green' : hasClickedReview && option !== questions[currentQuestion].correctAnswer && selectedAnswers[currentQuestion] === option ? 'red' : 'black'}}
        >
          {option}
        </span>} />
  ))}
  
  </RadioGroup>
</FormControl>

    </div>


        <div>
        <button className="next" onClick={handleNextQuestion}>
        {currentQuestion + 1 === questions.length ? 'Review' : 'Next'}
        </button>
        <MuiThemeProvider theme={theme}>

        <Dialog  maxWidth='lg'  open={open} onClose={handleClose} 
        aria-labelledby="form-dialog-title"
        classes={{ paper: classes.dialogBox }}>

  <DialogContent className={classes.dialogContent}>
  <DialogContentText>{hasSubmitted ? content : initialcontent}</DialogContentText>
  {hasSubmitted && score >= 0 && (
    <DialogContentText>
      You scored {score}%.
    </DialogContentText>
  )}
  </DialogContent>


<DialogActions>
  <Button onClick={handleClose} class="btn btn-outline-primary">
    No
  </Button>
  
  <Button
   onClick={handleYesClick}
    color="primary"
    variant="contained"
  >
    {hasSubmitted ? 'Review' : 'Yes'}
  </Button>
</DialogActions>
</Dialog>
</MuiThemeProvider>

        </div>
       
      </div>
      </div>
     
    );

}
export default History;