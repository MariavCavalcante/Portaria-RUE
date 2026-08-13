import { AVISO_INSTITUCIONAL, REFERENCIA_NORMATIVA } from '@/data/portaria792';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-ses-neutro-200 bg-ses-azul text-white">
      <div className="mx-auto max-w-7xl space-y-3 px-4 py-6 text-sm sm:px-6 lg:px-8">
        <p className="font-semibold">
          Painel Institucional da Política Estadual da Rede de Urgência e Emergência do Estado de
          Goiás.
        </p>
        <p>Conteúdo baseado na {REFERENCIA_NORMATIVA}.</p>
        <p className="text-white/85">{AVISO_INSTITUCIONAL}</p>
        <nav aria-label="Links institucionais" className="flex flex-wrap gap-x-4 gap-y-1 pt-2 text-white/90">
          {/* Somente links validados devem ser incluídos aqui (Portaria, SES-GO e repositório do GitHub). */}
          <span className="text-white/60">
            Links institucionais (Portaria, SES-GO, repositório) a incluir após validação.
          </span>
        </nav>
      </div>
    </footer>
  );
}
