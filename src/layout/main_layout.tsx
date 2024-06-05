import React from 'react';


const MainLayout: React.FC<any> = (props) => {
    return (
        <div>
            <header>
                {/* Header content goes here */}
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                {/* Footer content goes here */}
            </footer>
        </div>
    );
}

export default MainLayout;
