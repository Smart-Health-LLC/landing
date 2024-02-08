import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  additionalClasses?: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={` ${props.color} ${props.additionalClasses} `}>
    {props.children}
  </div>
);

export { Background };
