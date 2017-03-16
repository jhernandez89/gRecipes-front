import { RecipeServiceService } from './recipe-service.service';
// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        {{title}}
        <ul>
            <li *ngFor = "let course of courses"></li>
            <li>{{course}}</li>
        <ul>
        `
})
export class CourseComponent {
    title = 'The Title of Course Page';
    courses = ['Course1', 'Course2', 'Course3']
}