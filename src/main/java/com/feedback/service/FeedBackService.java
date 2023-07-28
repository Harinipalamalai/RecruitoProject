package com.feedback.service;

import org.springframework.stereotype.Service;

import com.feedback.models.FeedBack;
import com.feedback.repositories.FeedBackRepo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
@Service
public class FeedBackService {
  @Autowired
  private FeedBackRepo repo;
  
  
  //add feed
  public FeedBack addFeedback(FeedBack feedback) {
		return repo.save(feedback);
	}
  
  //get feed
  public List<FeedBack> getAllFeeds() {
      return repo.findAll();
  }
  
  //delete feed
  public String deleteFeedById(int Id)

  {

  	repo.deleteById(Id);
  	return "FeedBack closed !";

  }
  
}
