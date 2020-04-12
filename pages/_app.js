import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme/mui';
export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
