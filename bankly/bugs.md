## BUG #1
**Location:** routes/auth.js login route  
**Problem:** Missing `await` when calling `User.authenticate`.  
**Fix:** Add `await` before calling `User.authenticate(username, password)`.

## BUG #2
**Location:** routes/users.js delete route  
**Problem:** Missing `await` when calling `User.delete`.  
**Fix:** Add `await` before `User.delete(username)`.

## BUG #3
**Location:** models/user.js get method  
**Problem:** Not throwing error when user is not found.  
**Fix:** Add `throw` before `new ExpressError('No such user', 404)`.

## BUG #4
**Location:** middleware/auth.js authUser  
**Problem:** Token was only decoded, not verified.  
**Fix:** Use `jwt.verify(token, SECRET_KEY)`.