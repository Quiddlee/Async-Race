import { FormTypes } from '../../../types';
import { generateFormMarkup } from '.';

/**
 * @description Generates modification form markup
 * @return {string}
 */
export default function generateModificationFormMarkup() {
  const formTypes = [FormTypes.CREATE, FormTypes.UPDATE] as const;

  return `
    <section class='modification-form px-3-2 pt-3-2 pb-4-8'>
      ${formTypes.map((formType) => generateFormMarkup(formType)).join('')}
    </section>
  `;
}
