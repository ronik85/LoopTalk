import React from 'react';
import Header from './Header';

const AppLayout = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                <Header/>
                <main>
                    <WrappedComponent {...props} />
                </main>
                <footer>Footer</footer>
            </div>
        );
    };
};

export default AppLayout;
