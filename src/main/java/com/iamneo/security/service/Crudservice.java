package com.iamneo.security.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Crudmodel;
import com.iamneo.security.repository.Crudrepo;

@Service
public class Crudservice {
	    @Autowired
	     Crudrepo r;
	     public Crudmodel saveDetails( Crudmodel e) {
	   	  return r.save(e);
	     }
	     public List<Crudmodel> getDetails(){
	   	  return r.findAll();
	     }
	     public Optional<Crudmodel> getDetails(long jobid){
	      	  return r.findById(jobid);
	        }
	     
	     public Crudmodel updateDetails(Crudmodel e1) {
	   	  return r.saveAndFlush(e1);
	     }
	     public void deleteDetails(long jobid ) {
	   	  r.deleteById(jobid);
	     }
	}