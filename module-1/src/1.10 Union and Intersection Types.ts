
// union types

// js er or(||) er kaj ekhane union types
// js er and(&&) er kaj ekhane intersection types


type FrontendDeveloper = "Front-end Developer" | 'Front-end Coder';
type BackendDeveloper = 'Backend Developer' | 'Backend Coder';

type Developer = FrontendDeveloper | BackendDeveloper;

const developer:Developer = "Backend Developer";


// intersection types
type Frontend = {skills: string[], designation1: 'Front-end Dev'};
type Backend = {skills: string[], designation2: 'Backend Dev'};

type FullstackDeveloper = Frontend & Backend;
 const fullStack:FullstackDeveloper = {
    skills: ['react', 'Next.js', 'Express.js'],
    designation1: 'Front-end Dev',
    designation2: 'Backend Dev'
}








