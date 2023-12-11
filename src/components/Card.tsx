import { FC, ReactNode } from "react";

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width: string;
    height: string;
    variant: CardVariant;
    children: ReactNode;
}


const Card: FC<CardProps> = ({ width, height, children, variant }) => {

    return (
        <div style={{
            width, height,
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'gray' : ''
        }}>
            {children}
        </div>
    )
}
export default Card;