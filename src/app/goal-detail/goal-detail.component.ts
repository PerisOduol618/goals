import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import {  ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})

export class GoalDetailComponent implements OnInit {
  goals: Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
    new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
    new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
    new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
    new Goal(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
    new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),
  ];

  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor(private route:ActivatedRoute, private service:GoalService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.goal =this.service.getGoal(id)
  }

}
