export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (title: string, content: string) => void;
}

export interface ButtonProps {
    children: React.ReactNode;
    size?: "small" | "medium" | "large";
    shape?: "rounded-sm" | "rounded-md" | "rounded-full";
    onClick?: () => void;
    className?: string;
}

export interface PostProps {
    title: string;
    id: number;
    body: string;
    userId: number;
}

export interface UserProps {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        city: string;
    };
}