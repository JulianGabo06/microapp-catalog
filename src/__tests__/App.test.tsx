import { render, screen } from '@testing-library/react-native';
import CatalogApp from '../App';

describe('CatalogApp', () => {
  it('muestra la cabecera de la micro app', async () => {
    await render(<CatalogApp />);

    expect(screen.getByText('mini app · catalog')).toBeOnTheScreen();
    expect(screen.getByText('Catálogo')).toBeOnTheScreen();
    expect(
      screen.getByText('Este bundle se sirve desde el puerto 9001 (o desde S3/Floci).'),
    ).toBeOnTheScreen();
  });

  it.each([
    ['Café de origen', '$12'],
    ['Taza cerámica', '$18'],
    ['Filtro V60', '$9'],
    ['Molino manual', '$45'],
  ])('lista el producto "%s" con precio %s', async (name, price) => {
    await render(<CatalogApp />);

    const product = screen.getByText(name);
    expect(product).toBeOnTheScreen();
    expect(product.parent).toHaveTextContent(`${name}${price}`);
  });
});
