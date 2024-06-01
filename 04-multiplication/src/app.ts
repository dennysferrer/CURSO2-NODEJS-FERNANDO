
import { findHeroById } from '../src/services/hero.services'


const hero = findHeroById(4);

console.log(hero?.name ?? 'Hero not found...')