# About Pro Web (professional web)

## Why is it?
I wanted a personal site for various reasons one of which was for professional demonstration. The best site I could have for professional demonstration is my own site, done in as professional manner as I can, not to say there aren't things I wouldn't improve, such is always the case, especially over time. In terms of functionality I had two essential features. First, I want to have content ("pages" of html/markdown) arranged by tag and tags collected into various sets which will not only organize the content but also be the driver for menu options, etc. Second, I wanted an authentication system that didn't involve passwords or 3rd parties, [read more](./login-method.md) on this subject.

## What is it?
Pro Web is a set of repositories that define a set of contracts, enumerables, validators found [here](#Pro-Web-Common), and also implement the contracts contained in "common" and tests for each repository testing each implementation of a given contract.

## Technical Aims:
  * structuring code into discete parts all drawn together by fulfilling part of larger contract that unites the pieces into one.
  * use my understanding of how best to use typescript to express the all the conceptual aspects of the system (interfaces, enums, types, validators) as well as implement this system throughout the stack of repositories (data/service/endpoint)
  * a sufficient mysql data-model
  * using a maximal state management principle in a react-redux application, consequently reduce need for or complexity of Component parameters.
  * creating a [login method](./login-method.md) that uses gpg keys and challenge-decryption to issue a json web token (jwt). Please note my future [plans]() to revolutionize the authentication flow for end users and perhaps even devices
