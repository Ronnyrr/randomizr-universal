import { injectGlobal } from 'styled-components';
import CircularProBold from 'fonts/CircularPro-Bold.otf';
import CircularProBook from 'fonts/CircularPro-Book.otf';
import NimbusBlackItalic from 'fonts/NimbusSansDOT-BlackItalic.otf';
import NimbusBlack from 'fonts/NimbusSansDOT-Black.otf';

export default () => injectGlobal`
    @font-face {
      font-family: CircularProBold;
      src: url('${CircularProBold}') format('opentype');
    }

    @font-face {
      font-family: CircularProBook;
      src: url('${CircularProBook}') format('opentype');
    }

    @font-face {
      font-family: NimbusBlackItalic;
      src: url('${NimbusBlackItalic}') format('opentype');
    }

    @font-face {
      font-family: NimbusBlack;
      src: url('${NimbusBlack}') format('opentype');
    }

    html {
        box-sizing: border-box;
        min-height: 100%;
        height: 100%;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'CircularPro', sans-serif;
    }
`;
