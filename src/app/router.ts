import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { PokemonTeamComponent } from './components/pokemon-team/pokemon-team.component';

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    { path: 'home', 
        component: HomeComponent 
    },
    {
        path: 'pokemon-info',
        component: PokemonInfoComponent
    },
    { path: 'pokemon-team',
        component: PokemonTeamComponent
    }
    ];
export default appRoutes;