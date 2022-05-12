import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes  from 'all:part:@sanity/base/schema-type'

import about              from './documents/about.js';
import backend            from './documents/backend.js';
import database           from './documents/database.js';
import education          from './documents/education.js';
import frontend           from './documents/frontend.js';
import interactionDesign  from './documents/interactionDesign.js';
import projects           from './documents/projects.js';
import semanticTech       from './documents/semanticTech.js';
import systemDevelopment  from './documents/systemDevelopment.js';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    projects,
    frontend,
    backend,
    database,
    interactionDesign,
    semanticTech,
    systemDevelopment,
    education,
    about
  ]),
});
