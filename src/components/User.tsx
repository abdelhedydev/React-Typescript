import React from 'react'

export interface Id { 
  compiler: string;
   framework: string;
   }

export const Hello = (props: Id) => 
    <h1>
      Hello from {props.compiler} and {props.framework}!
    </h1>;
