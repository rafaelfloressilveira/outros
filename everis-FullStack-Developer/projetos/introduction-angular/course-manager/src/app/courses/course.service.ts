import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';
import { CourseListComponent } from './course-list.component';

@Injectable ({
    providedIn: 'root'
})

export class CourseService {
    
    private coursesUrl: string = 'http://localhost:3100/api/courses'; 

    constructor(private httpClient: HttpClient) { }

    retrieveAll(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }
    
    retrieveById(id: number): Observable<Course> {
        return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
    }

    save(course: Course): Observable<Course> {
        if(course.id) {
            return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course);
        } else {
            return this.httpClient.post<Course>(`${this.coursesUrl}`, course);
        }
    }
    
    deleteById(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);

    }
}


var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'December, 05 , 2020',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'ACL-0120',
        rating: 3.7,
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'December, 07 , 2020',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 80,
        code: 'AFM-0080',
        rating: 3.9,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'December, 12 , 2020',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 80,
        code: 'AHP-0080',
        rating: 4.2,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'December, 13 , 2020',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 60,
        code: 'ART-0060',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'December, 14 , 2020',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duration: 180,
        code: 'ANM-0180',
        rating: 5,
        price: 126.99,
        imageUrl: '/assets/images/animations.png',
    }
];