import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const ExampleComponent = () => {
    const value = useSelector((state: RootState) => state.example.value);

    return <div>Value: {value}</div>;
};

export default ExampleComponent;