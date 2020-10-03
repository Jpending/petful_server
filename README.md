# Petful Server

Authors: John Pendergast and Ryan Whitmore

[Live site demo Link](https://petful-indol.vercel.app/adopt)
[Deployed Server Link](https://whispering-taiga-42523.herokuapp.com)
[Client Repo Link](https://github.com/Jpending/petful_client)

## Introduction:

The Petful Adoption program makes it fair for the animals to be adopted in sequential order.
The process is simple. Get in line to adopt a cat, a dog or both. The cats and dogs are also
in line to be adopted by a human. When you get to the front of your line, you will have the
option of adopting the cat and/or dog at the front of their respective lines.

## Tech Stack:

**Backend**: Node.js - Express.js

**Frontend**: React - Tailwind

## API Endpoints:

This code stores people and pet information where they can only be added or deleted in a queue structure.

```text
/
├── /people
|   └── GET
|   └── POST
|   └── DELETE
├── /pets
|     └── /:type
|       └── GET
|       └── DELETE
```

## People Endpoints

GET`/people`

Returns the queue of people

```js
// res.body
[<people names>]
```

DELETE`/people`
Deletes the person at the front of the queue

```js
// res.status
204;
```

## Pets Endpoints

**Dogs:**
GET `/pets/dogs`

Gets the queue of dog objects containing all their information

```js
// req.params
{
  dogs
}
// res.body
{
        age: Number,
        breed: String,
        description: String,
        gender: String,
        imageURL: String,
        name: String,
        story: String
    }
```

DELETE `/pets/dogs`

Removes the dog from the front of the queue

```js
// req.params
{
  :/type: dogs
}
```

**Cats:**
GET `/pets/cats`

Gets the queue of dog objects containing all their information

```js
// req.params
{
  :/type: cats
}
// res.body
{
        age: Number,
        breed: String,
        description: String,
        gender: String,
        imageURL: String,
        name: String,
        story: String
    }
```

DELETE `/pets/cats`

Removes the dog from the front of the queue

```js
// req.params
{
  cats;
}
```

## Instructions to clone and run

1. Download repo zip file or run `git clone <HTTPS or SSH link>` to your machine.
2. Set up the client side the same way as step 1 from this [link](https://github.com/Jpending/petful_client)
3. Run `npm install` on both client and server directories
4. Rename `example.env` to `.env` on the server
5. Run `npm start` on the server first, then the client
