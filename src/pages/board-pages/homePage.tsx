import React from 'react';
import MainLayout from '../../layout/main_layout';

interface MyComponentProps {
    // Define props here
}

const HomePage: React.FC<MyComponentProps> = (props) => {


    return (
        <div>
            <MainLayout>
            {/* JSX content goes here */}
            xxx
            </MainLayout>
        </div>
    );
}

export default HomePage;