import { useState } from 'react';

type Props = {
  messages: string[]
}

export const Greeting: React.FC<Props> = ({messages}) => {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}！ 訪問いただきありがとうございます！</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        新しい挨拶
      </button>
    </div>
  );
}