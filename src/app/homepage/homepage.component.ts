import {Component} from '@angular/core';

export type CardInfo = {
    image: string;
    title: string;
    description: string;
    redirect: string;
};

@Component({
    selector: 'app-homepage',
    standalone: true,
    imports: [],
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
    test = '/assets/300x350.svg';
    projectCards: CardInfo[] = [
        {
            image: '/assets/300x350.svg',
            title: 'Project name #1',
            description: 'Project description',
            redirect: '#'
        },
        {
            image: '/assets/400x600.svg',
            title: 'Project name #1',
            description: 'Project description',
            redirect: '#'
        }
    ];
}
