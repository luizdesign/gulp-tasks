# Gulp-Tasks
Generic scripts to execute routine tasks with gulp as task runner tool.

## Structure
The main files structure contains:

```md
├── tasks/
    └── compilers/
            └── babel.js
```

- tasks: In this folder each task is organized in folders according it function

## How use
Add this project in your package.json, and use a script in postinstall hook to copy the tasks for your project. After it, you can configure your gulpfile.babel.js file to use it.

```json
{
    "name": "your-project",
    "version": "1.0.0",
    "scripts": {
        "postinstall": "npm run setup-gulp",
        "setup-gulp": "cp -r ./node_modules/gulp-tasks/tasks ./"
    }
}
```

```js
import gulp from 'gulp';
import babelCompiler from './tasks/compilers/babel.js';

gulp.task(
    'babel-compile',
    () => {
        let blob = gulp.src('./src/**/*.js');

        babelCompiler(
            blob,
            babelConfig,
            distFolderPath
        );
    }
);
```
