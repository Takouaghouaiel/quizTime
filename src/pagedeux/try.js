import React, {Component , useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import { questions } from '../question/questions';

import {  Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";


export default function Try (){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [open, setOpen] = useState(false);
  
    const handleNextQuestion = () => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }else{
        const handleOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };
      
        const handleSubmit = () => {
          // handle submit logic here
          handleClose();
        };
      
        return (
          <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Submit Quiz
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>{"Are you sure you want to submit the quiz?"}</DialogTitle>
              <DialogContent>
                {/* customize dialog content here */}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
       
      }};
    }