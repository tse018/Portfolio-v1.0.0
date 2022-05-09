import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import about from './documents/about.js';
import education from './documents/education.js';
import projects from './documents/projects.js';
import techStack from './documents/techStack.js';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    projects,
    education,
    techStack,
    about,
  ]),
})
