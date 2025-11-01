
import React from 'react';

// 1. Using if/else
function IfElseExample({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>Welcome back!</p>;
  } else {
    return <p>Please log in.</p>;
  }
}

// 2. Using ternary operator
function TernaryExample({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}

// 3. Using logical && operator
function LogicalAndExample({ unreadMessages }) {
  return (
    <div>
      {unreadMessages.length > 0 && (
        <p>You have {unreadMessages.length} unread messages.</p>
      )}
    </div>
  );
}

// 4. Using switch statement
function SwitchExample({ userStatus }) {
  switch (userStatus) {
    case 'active':
      return <p>Your account is active.</p>;
    case 'inactive':
      return <p>Your account is inactive.</p>;
    case 'pending':
      return <p>Your account is pending approval.</p>;
    default:
      return <p>Welcome!</p>;
  }
}

// 5. Using enums (object mapping)
const statusComponents = {
  active: <p>Your account is active.</p>,
  inactive: <p>Your account is inactive.</p>,
  pending: <p>Your account is pending approval.</p>,
};

function EnumExample({ userStatus }) {
  return <div>{statusComponents[userStatus] || <p>Welcome!</p>}</div>;
}


export default function ConditionalRenderingExamples() {
    const unreadMessages = ['a', 'b', 'c'];
  return (
    <div>
      <h1>Conditional Rendering Examples</h1>

      <h2>1. If/Else Statement</h2>
      <IfElseExample isLoggedIn={true} />
      <IfElseExample isLoggedIn={false} />

      <h2>2. Ternary Operator</h2>
      <TernaryExample isLoggedIn={true} />
      <TernaryExample isLoggedIn={false} />

      <h2>3. Logical && Operator</h2>
      <LogicalAndExample unreadMessages={unreadMessages} />
      <LogicalAndExample unreadMessages={[]} />

      <h2>4. Switch Statement</h2>
      <SwitchExample userStatus="active" />
      <SwitchExample userStatus="inactive" />
      <SwitchExample userStatus="pending" />
      <SwitchExample userStatus="unknown" />

      <h2>5. Enum (Object Mapping)</h2>
      <EnumExample userStatus="active" />
      <EnumExample userStatus="inactive" />
      <EnumExample userStatus="pending" />
      <EnumExample userStatus="unknown" />
    </div>
  );
}
