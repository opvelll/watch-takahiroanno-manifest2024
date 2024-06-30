import React from 'react';
import { Button } from 'antd';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ExternalLinkButtonProps {
    url: string;
    text: string;
}

const ExternalLinkButton: React.FC<ExternalLinkButtonProps> = ({ url, text }) => {
    const handleClick = () => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <Button type="primary" shape="round" onClick={handleClick} icon={<FaExternalLinkAlt />}>
            {text}
        </Button>
    );
};

export default ExternalLinkButton;
