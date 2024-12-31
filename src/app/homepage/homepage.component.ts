import {Component} from '@angular/core';

export type ProjectCard = {
    image: string;
    title: string;
    description: string;
    redirect: string;
};

export type ProgramIcon = {
    name: string;
    image: string;
};

@Component({
    selector: 'app-homepage',
    standalone: true,
    imports: [],
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
    projectCards: ProjectCard[] = [
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
    programIcons: ProgramIcon[] = [
        {
            name: 'Adobe Animate',
            image: '/assets/content/homepage/program-icons/adobe-animate.png'
        },
        {
            name: 'Audacity',
            image: '/assets/content/homepage/program-icons/audacity.png'
        },
        {
            name: 'Blender',
            image: '/assets/content/homepage/program-icons/blender.png'
        },
        {
            name: 'Character Creator',
            image: '/assets/content/homepage/program-icons/character-creator.png'
        },
        {
            name: 'Gimp',
            image: '/assets/content/homepage/program-icons/gimp.png'
        },
        {
            name: 'IClone',
            image: '/assets/content/homepage/program-icons/iclone.png'
        },
        {
            name: 'Maya',
            image: '/assets/content/homepage/program-icons/maya.png'
        },
        {
            name: 'Motive',
            image: '/assets/content/homepage/program-icons/motive.png'
        },
        {
            name: 'Photoshop',
            image: '/assets/content/homepage/program-icons/photoshop.png'
        },
        {
            name: 'Substance painter',
            image: '/assets/content/homepage/program-icons/substance painter.png'
        },
        {
            name: 'Unity',
            image: '/assets/content/homepage/program-icons/unity.png'
        },
        {
            name: 'Unreal',
            image: '/assets/content/homepage/program-icons/unreal.png'
        }
    ];
}
