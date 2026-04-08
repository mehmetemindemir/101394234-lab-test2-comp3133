import { Routes } from '@angular/router';
import { Missionlist } from './components/missionlist/missionlist';
import { Missiondetails } from './components/missiondetails/missiondetails';

export const routes: Routes = [
	{ path: '', component: Missionlist },
	{ path: 'mission/:id', component: Missiondetails },
	{ path: '**', redirectTo: '' },
];
