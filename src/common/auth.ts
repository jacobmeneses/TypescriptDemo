import { Strategy } from 'passport-local';

export function getAuthStrategy() : Strategy {
    let strategy = new Strategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback : true
      }, function (request, username, password, done) {
        console.log(`login function: `, username, password)

        if(username === 'jacob' && password==='jacob') {
            return done(null, { id: '1', username: 'jacob', color: '#FF0000' });
        }

        return done(null, false, { message: 'Incorrect data.' });
    });

    console.log(`strategy name : ${strategy.name}`);
    strategy.name = 'local';
    console.log("Entrando aqui");

    return strategy
};

export function serializeUser(user: any, done: any) {
    console.log("serializing...")
  done(null, user.id);
};

export function deserializeUser(id: any, done: any){
    console.log("de-serializing...")
  done(null, { id: id, username: 'jacob', color: '#FF0000' })
};

export function AuthedMiddleware(req: any, res: any, next: any) {
    console.log('Auth middleware');
    console.log(req.user);

    if (req.user) {
        console.log('calling next function');
        next();
    } else {
        console.log('NOT calling next function');
    }
};