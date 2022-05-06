import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <div>
        <h2>Difference between javascript and nodejs</h2>
        <h3>
          JavaScript is a simple programming language that runs on the
          JavaScript Engine in any browser. While Node JS is an interpreter or
          runtime environment for the JavaScript programming language, it
          requires libraries that can be easily accessible from JavaScript
          programming to make it more useful. Javascript is a client-side
          scripting language. Node js is primarily used on the server.
          Javascript has the ability to add HTML and manipulate the DOM. Nodejs
          does not support the addition of HTML tags. In frontend development,
          Javascript is used. In server-side development, Nodejs is employed.
          RamdaJS, TypedJS, and other javascript frameworks are examples.
          Lodash, express, and other Nodejs modules are examples. These modules
          will be downloaded through npm.
        </h3>
      </div>
      <div>
        <h2>Differences between sql and nosql databases.</h2>
        <h3>
          RELATIONAL DATABASE MANAGEMENT SYSTEM (SQL) (RDBMS). Non-relational or
          distributed database system is Nosql. These databases have a fixed,
          static, or preset schema in SQL. They have dynamic schema in nosql,
          however. These databases are not designed for storing hierarchical
          data in SQL. These databases are best suited for storing hierarchical
          data in nosql. These databases are suitable for sophisticated queries
          in SQL. These databases are not suited for sophisticated queries in no
          sql. Scalable vertically Vertically scalable ACID property is
          followed. CAP is followed (consistency, availability, partition
          tolerance)
        </h3>
      </div>
      <div>
          <h2>What is the purpose of jwt and how does it work</h2>
        <h3>
          JSON Web Token (JWT) is an open standard (RFC 7519) for securely
          sending data as a JSON object between parties. It is small, readable,
          and digitally signed by the Identity Provider using a private
          key/public key pair (IdP). As a result, other parties can verify the
          token's integrity and legitimacy. The goal of utilizing JWT is to
          confirm the data's authenticity, not to hide it. JWT is not encrypted,
          but it is signed and encoded. JWT is a stateless authentication
          technique based on tokens. Because it is a client-side stateless
          session, the server does not need to rely on a datastore (database) to
          save session data. The identity provider (IdP) provides a JWT that
          certifies the user's identity, which the Resource server decodes and
          verifies.Basically the identity provider(IdP) generates a JWT
          certifying user identity and Resource server decodes and verifies the
          authenticity of the token using secret salt / public key. User sign-in
          using username and password or google/facebook. Authentication server
          verifies the credentials and issues a jwt signed using either a secret
          salt or a private key. User’s Client uses the JWT to access protected
          resources by passing the JWT in HTTP Authorization header. Resource
          server then verifies the authenticity of the token using the secret
          salt/ public key.
        </h3>
      </div>
    </div>
  );
};

export default Blogs;
