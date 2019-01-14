import { Strategy } from 'passport-local';


function login(username, password, done) {
    console.log(`login function: `,username, password)

    if(username === 'jacob' && password==='jacob') {
        return done(null, { username: 'jacob', color: '#FF0000' });
    }

    return done(null, { username: 'jacob', color: '#FF0000' });
    // error in other case
    // return done(null, false, { message: 'Incorrect data.' });
}

export function getAuthStrategy() {
    let strategy = new Strategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback : true
      }, login);

    console.log(`strategy name : ${strategy.name}`);
    strategy.name = 'local';
    console.log("Entrando aqui");

    return strategy
}

export function serializeUser(user: any, done: any) {
    console.log("serializing...")
  done(null, user.id);
}

export function deserializeUser(id: any, done: any){
    console.log("de-serializing...")
  done(null, { username: 'jacob', color: '#FF0000' })
}

export function AuthedMiddleware(req, res, next) {
    if (req.user) {
        next(req, res)
    }
}