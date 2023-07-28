package com.feedback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feedback.models.FeedBack;
import com.feedback.service.FeedBackService;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins="*",allowedHeaders="*")
public class FeedBackController {

	
	@Autowired
	private FeedBackService fservice;
	
	
	//Save FeedBack
	@PostMapping("/addfeed")
	public FeedBack AddFeedback(@RequestBody FeedBack feedback) {
		return fservice.addFeedback(feedback);
	}
	
	//Get FeedBack
	@GetMapping("/getFeeds")
	public List<FeedBack> getAllFeeds() {
        return fservice.getAllFeeds();
    }
	
	//Delete FeedBack
	@DeleteMapping("/delFeed/{Feed_id}")

	public String deletedetails(@PathVariable("Feed_id") int Feed_id)

	{

	return fservice.deleteFeedById(Feed_id);

	}
	
}
