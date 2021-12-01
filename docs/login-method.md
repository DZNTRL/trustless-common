# Authentication Flow

## Why re-create the wheel?
Wood wheels and steel wheels all had their day, and indeed still have their uses, pros and cons. In this metaphor, imagine wood wheels are username/password (UnPw) flow and steel wheels are 3rd party authentications which doubtlessly have their cons. In particalar, in the case of UnPw we have to secure the storage and the transit there of -- this is particularly important because that data then becomes valuable to others which is sort of ironic if you think about it. In the case of 3rd parties, we have hard dependencies on things well outside of our control, we also have ever-changing terms of service with which to contend. I truly don't want either set of cons in this case. Indeed, for this case I have a better solution.

### The solution, pros and cons
My better idea is to use gpg key pairs and encrypted challenges. For this initial implementation, I require a new user account to submit a public key with their username. That public key get stored in the database and is of practically *no value* to anyone else. Then, when a login is requested, the public key is used to encrypt a message which is then sent to the end user. The user must decrypt the challenge and send it back. If the decryption is correct, they get a json web token (JWT) for that session.

#### Pros
1. very simple account creation workflow
2. no need for emails
3. no valuable data stored

#### Cons
1. This implementation is naive, meaning that extra features are needed to make it fully useable, even for a tech-savvy crowd.
2. This means the user must manually decrypt the message (for now, please see [future plans](#future-plans))

#### But, most importantly, we have created a fully self-authenticated flow!

#### <a id="future-plans">Future Plans</a>
I want to create a FOSS app (desktop/phone/etc) that will store keys for different identites and handle the message decryption flow automatically and require **NO 3rd Party Service**. I have this all planned out perfectly in my head, but I'm not quite ready to share it yet.