import { colors } from '@ignite-ui/tokens';

import { getContrast } from 'polished';

export function ColorsGrid() {
  /**
   * Ele retorna uma array com vários arrays dentro
   * onde a primeira posição o índice 0 é a chave e
   * o índice 1 é o valor. Vamos desestruturar o array
   */
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    );
  });
}
