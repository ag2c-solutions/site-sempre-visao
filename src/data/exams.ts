import type { IPost } from './post.interface';

import OCTImage from '../../public/exames/Tomografia-de-Coerencia-Optica.webp';
import TopoImage from '../../public/exames/Topografia de Cornea.webp';
import RetImage from '../../public/exames/retinografia-colorida-capa.webp';
import MecImage from '../../public/exames/Microscopia Especular de Cornea.webp';
import BioImage from '../../public/exames/Biometria optica.webp';
import CYLImage from '../../public/exames/Capsulotomia-Yag-Laser.jpg';
import PaqImage from '../../public/exames/Paquimetria-Ultrassonica.webp';
import MapImage from '../../public/exames/Mapeamento de Retina.jpeg';

export interface IExam extends Pick<
  IPost,
  'title' | 'description' | 'content' | 'slug' | 'tags' | 'imageUrl'
> {
  label: string;
}

export const exams: IExam[] = [
  {
    label: 'Tomografia de Coerência Óptica',
    title:
      'Tomografia de Coerência Óptica (OCT): O Guia Completo para a Saúde dos Seus Olhos',
    description:
      'Descubra tudo sobre a Tomografia de Coerência Óptica (OCT). Nossa equipe explica de forma clara o que é o exame, sua importância para diagnosticar glaucoma, DMRI e outras doenças da retina, como é o procedimento e responde às perguntas mais frequentes. Um guia completo para pacientes.',
    slug: 'Tomografia-de-Coerencia-Optica-OCT-O-Guia-Completo-para-a-Saude-dos-Seus-Olhos',
    imageUrl: OCTImage,
    content: `
                <article>
                <header>
                    <h1>Tomografia de Coerência Óptica (OCT): O Guia Completo para a Saúde dos Seus Olhos</h1>
                </header>
                
                <section id="o-que-e">
                    <p>A <strong>Tomografia de Coerência Óptica</strong>, também conhecida pela sigla <strong>OCT</strong>, é um exame de imagem revolucionário e não invasivo que transformou a oftalmologia moderna. Essencial para o diagnóstico e acompanhamento de diversas doenças oculares, o OCT oferece uma visão detalhada e em alta resolução das camadas da retina, do nervo óptico e de outras estruturas do fundo do olho, permitindo que seu oftalmologista cuide da sua visão com a máxima precisão.</p>
                    <p>Nesta página, você encontrará tudo o que precisa saber sobre este exame fundamental, desde o seu funcionamento e principais indicações até o que esperar durante o procedimento.</p>
                </section>

                <section id="como-funciona">
                    <h2>O que é a Tomografia de Coerência Óptica (OCT)?</h2>
                    <p>Pense na OCT como um "ultrassom" do olho, mas que utiliza a luz em vez do som. O exame emprega uma tecnologia de feixes de luz infravermelha para criar imagens transversais, em três dimensões (3D) e com resolução micrométrica das estruturas oculares. Isso permite ao médico analisar cada camada de tecido de forma individualizada, identificando alterações que seriam impossíveis de visualizar em um exame de rotina.</p>
                    <p>O procedimento é <strong>rápido, indolor e não exige contato</strong> direto com o olho, garantindo total conforto e segurança para o paciente.</p>
                </section>

                <section id="indicacoes">
                    <h2>Para que Serve o Exame de OCT? A Janela para o Diagnóstico Precoce</h2>
                    <p>A capacidade da OCT de fornecer imagens detalhadas das estruturas internas do olho a torna uma ferramenta indispensável para o diagnóstico precoce e o monitoramento de uma vasta gama de condições oftalmológicas. As principais indicações incluem:</p>
                    <ul>
                        <li><strong>Doenças da Retina:</strong> A OCT é o padrão-ouro para avaliar a mácula, a área central e mais nobre da retina. É fundamental para o diagnóstico e acompanhamento de:
                            <ul>
                                <li><strong>Degeneração Macular Relacionada à Idade (DMRI):</strong> Permite identificar os primeiros sinais e monitorar a eficácia do tratamento.</li>
                                <li><strong>Retinopatia Diabética:</strong> Avalia o inchaço (edema) na retina, uma das principais causas de perda de visão em diabéticos.</li>
                                <li><strong>Buraco Macular e Membrana Epirretiniana:</strong> Oferece um diagnóstico preciso e auxilia no planejamento cirúrgico.</li>
                                <li><strong>Descolamento de Retina:</strong> Ajuda a identificar a extensão e as características do descolamento.</li>
                            </ul>
                        </li>
                        <li><strong>Glaucoma:</strong> A OCT revolucionou o acompanhamento do glaucoma. O exame mede com extrema precisão a espessura da camada de fibras nervosas do nervo óptico, permitindo a detecção de perdas sutis e iniciais, muitas vezes antes mesmo que o paciente note qualquer alteração no campo visual. Isso é crucial para iniciar o tratamento o quanto antes e preservar a visão.</li>
                        <li><strong>Avaliação do Nervo Óptico:</strong> Além do glaucoma, a OCT é utilizada para investigar outras neuropatias ópticas e condições que afetam o nervo que conecta o olho ao cérebro.</li>
                        <li><strong>Doenças da Córnea:</strong> Versões específicas do exame também podem analisar as camadas da córnea, auxiliando no diagnóstico de doenças como o ceratocone.</li>
                    </ul>
                </section>

                <section id="como-e-feito">
                    <h2>Como é Realizado o Exame de OCT?</h2>
                    <p>O procedimento é simples e rápido, durando em média de 5 a 10 minutos.</p>
                    <ol>
                        <li><strong>Preparação:</strong> Em muitos casos, pode ser necessário dilatar a pupila com o uso de colírios. Por isso, é recomendável que o paciente venha acompanhado, pois a visão pode ficar embaçada por algumas horas. Usuários de lentes de contato devem retirá-las antes do exame.</li>
                        <li><strong>Posicionamento:</strong> Você se sentará confortavelmente em frente ao aparelho de OCT e apoiará o queixo e a testa em um suporte.</li>
                        <li><strong>Realização do Exame:</strong> O equipamento irá escanear seus olhos sem tocá-los. Você será orientado a fixar o olhar em um ponto de luz enquanto o aparelho captura as imagens de alta resolução. O processo é totalmente indolor.</li>
                    </ol>
                    <p>Os resultados são obtidos imediatamente, permitindo que o oftalmologista os analise e discuta com você na mesma consulta.</p>
                </section>

                <section id="vantagens">
                    <h2>Principais Vantagens da Tomografia de Coerência Óptica</h2>
                    <ul>
                        <li><strong>Diagnóstico Precoce:</strong> Detecta doenças em estágios iniciais, antes da perda de visão.</li>
                        <li><strong>Alta Precisão:</strong> Fornece imagens detalhadas e medidas exatas.</li>
                        <li><strong>Não Invasivo e Indolor:</strong> Sem contato direto com o olho e sem dor.</li>
                        <li><strong>Rápido e Conveniente:</strong> O exame é concluído em poucos minutos.</li>
                        <li><strong>Acompanhamento Eficaz:</strong> Permite monitorar a progressão de doenças e a resposta aos tratamentos.</li>
                    </ul>
                </section>

                <section id="quem-deve-fazer">
                    <h2>Quem Deve Fazer o Exame de OCT?</h2>
                    <p>Seu oftalmologista pode solicitar a OCT se você tiver suspeita ou diagnóstico de glaucoma, doenças da retina como DMRI ou retinopatia diabética, ou se apresentar baixa de visão sem uma causa aparente. O exame também é um importante aliado no acompanhamento de pacientes que realizam tratamentos específicos ou cirurgias oculares.</p>
                    <p><strong>Cuide da sua visão. Se o seu médico solicitou a Tomografia de Coerência Óptica, não hesite. Agende seu exame e tenha a tranquilidade de um diagnóstico preciso e detalhado.</strong></p>
                    <a href="https:///wa.me/5516992627740" target="_blank" class="cta-button">Agende seu Exame de OCT Agora</a>
                </section>

                <section id="faq" class="faq-section">
                    <h2>Perguntas Frequentes (FAQ)</h2>
                    
                    <details class="faq-item">
                        <summary>O exame de OCT dói?</summary>
                        <p>Não, o exame é completamente indolor. Não há contato físico do aparelho com seus olhos.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Preciso de acompanhante para fazer o exame?</summary>
                        <p>Sim, é altamente recomendável ir com um acompanhante, pois geralmente é necessário dilatar as pupilas, o que deixa a visão embaçada por algumas horas.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Quanto tempo dura o exame de OCT?</summary>
                        <p>O exame em si é muito rápido, levando cerca de 5 a 10 minutos para ser concluído.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>O meu plano de saúde cobre o exame de OCT?</summary>
                        <p>A maioria dos planos de saúde oferece cobertura para a Tomografia de Coerência Óptica. É importante verificar diretamente com sua operadora as condições do seu plano.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Qual a diferença entre a Retinografia e a OCT?</summary>
                        <p>A retinografia é uma foto colorida do fundo do olho, mostrando a superfície da retina. A OCT, por sua vez, é uma tomografia que mostra as camadas internas da retina e do nervo óptico em cortes transversais, oferecendo uma análise muito mais profunda e detalhada. Os exames são complementares.</p>
                    </details>
                </section>
            </article>
        `
  },
  {
    label: 'Topografia de Córnea',
    title: 'Topografia de Córnea: O Mapa Detalhado da Sua Visão',
    description:
      'Entenda o que é o exame de Topografia de Córnea, também conhecido como Ceratoscopia. Saiba para que serve, como é realizado, sua importância no diagnóstico de ceratocone e astigmatismo, e como se preparar. Um guia completo para pacientes.',
    slug: 'topografia-de-cornea-o-mapa-detalhado-da-sua-visao',
    imageUrl: TopoImage,
    content: `
                <article>
                <header>
                    <h1>Topografia de Córnea: O Mapa Detalhado da Sua Visão</h1>
                </header>
                
                <section id="o-que-e">
                    <p>A <strong>Topografia de Córnea</strong>, também conhecida como <strong>Ceratoscopia Computadorizada</strong>, é um exame oftalmológico fundamental que mapeia em alta precisão a curvatura e o relevo da superfície da córnea, a lente transparente localizada na frente do olho. Este mapa tridimensional é essencial para que o oftalmologista possa avaliar detalhadamente a saúde ocular e a qualidade da sua visão.</p>
                    <p>Nesta página, vamos explorar tudo sobre este procedimento não invasivo e indolor, explicando sua importância, como funciona e quais condições ele ajuda a diagnosticar e a monitorar.</p>
                </section>

                <section id="como-funciona">
                    <h2>O que é a Topografia de Córnea?</h2>
                    <p>Imagine criar um mapa topográfico de um terreno, com suas elevações e depressões. A Topografia de Córnea faz algo similar, mas para a sua córnea. O exame utiliza um aparelho chamado topógrafo, que projeta uma série de anéis de luz concêntricos (conhecidos como Discos de Plácido) sobre a superfície ocular. A forma como esses anéis são refletidos é capturada por uma câmera digital.</p>
                    <p>Um software avançado analisa a imagem e a converte em um mapa colorido e detalhado. As cores quentes (vermelho, laranja) indicam áreas de maior curvatura, enquanto as cores frias (azul, verde) mostram as áreas mais planas. Essa análise permite identificar irregularidades na córnea que são imperceptíveis a olho nu.</p>
                </section>

                <section id="indicacoes">
                    <h2>Para que Serve o Exame de Topografia de Córnea?</h2>
                    <p>A Topografia de Córnea é uma ferramenta diagnóstica crucial para diversas finalidades, sendo indicada principalmente para:</p>
                    <ul>
                        <li><strong>Diagnóstico e Acompanhamento de Ceratocone:</strong> Esta é a principal indicação. O ceratocone é uma doença que afina e deforma a córnea, tornando-a com um formato de cone. A topografia é o exame padrão-ouro para detectar os sinais mais precoces da doença, muitas vezes antes dos sintomas aparecerem, e para monitorar sua progressão.</li>
                        <li><strong>Análise de Astigmatismo:</strong> Permite identificar e classificar o tipo de astigmatismo (regular ou irregular), fornecendo informações precisas para a prescrição de óculos e lentes de contato mais adequadas.</li>
                        <li><strong>Pré-operatório de Cirurgias Refrativas:</strong> É um exame obrigatório para pacientes que desejam realizar cirurgias para corrigir miopia, hipermetropia e astigmatismo (como LASIK e PRK). O mapa da córnea garante que a cirurgia seja segura e eficaz.</li>
                        <li><strong>Adaptação de Lentes de Contato:</strong> Especialmente para lentes de contato rígidas e esclerais, a topografia ajuda o oftalmologista a desenhar e adaptar a lente perfeita para o formato único da córnea do paciente, garantindo mais conforto e melhor visão.</li>
                        <li><strong>Pré e Pós-operatório de outras cirurgias oculares:</strong> É utilizada no planejamento de cirurgias de catarata, transplante de córnea e implante de anéis intraestromais.</li>
                        <li><strong>Avaliação de Degenerações e Irregularidades da Córnea:</strong> Ajuda a diagnosticar outras condições que afetam a superfície ocular.</li>
                    </ul>
                </section>

                <section id="como-e-feito">
                    <h2>Como é Realizado o Exame de Topografia?</h2>
                    <p>O procedimento é muito simples, rápido e confortável para o paciente.</p>
                    <ol>
                        <li><strong>Preparação:</strong> O principal cuidado é a suspensão do uso de lentes de contato dias antes do exame, pois elas podem moldar temporariamente a córnea e alterar o resultado. O seu médico indicará o período exato (geralmente de 2 a 7 dias). Não é necessário dilatar a pupila e não se utiliza nenhum colírio anestésico.</li>
                        <li><strong>Posicionamento:</strong> Você se sentará confortavelmente em frente ao topógrafo, posicionando o queixo e a testa em um suporte para manter a cabeça estável.</li>
                        <li><strong>Realização do Exame:</strong> Você será orientado a olhar para um ponto de luz fixo no centro do aparelho. O equipamento irá capturar as imagens da sua córnea em segundos, sem qualquer contato físico com seus olhos. O processo é totalmente indolor e não emite radiação prejudicial.</li>
                    </ol>
                    <p>O resultado é um mapa colorido que o oftalmologista analisa imediatamente.</p>
                </section>

                <section id="vantagens">
                    <h2>Principais Vantagens da Topografia de Córnea</h2>
                    <ul>
                        <li><strong>Alta Precisão:</strong> Fornece um mapa detalhado da curvatura da córnea.</li>
                        <li><strong>Diagnóstico Precoce:</strong> Essencial para detectar o ceratocone em seus estágios iniciais.</li>
                        <li><strong>Não Invasivo e Indolor:</strong> Sem contato com o olho, garantindo total conforto.</li>
                        <li><strong>Rápido e Prático:</strong> O exame dura apenas alguns segundos.</li>
                        <li><strong>Segurança Cirúrgica:</strong> Indispensável para o planejamento seguro de cirurgias refrativas.</li>
                    </ul>
                </section>

                <section id="quem-deve-fazer">
                    <h2>Quem Deve Fazer o Exame?</h2>
                    <p>Seu oftalmologista pode solicitar a Topografia de Córnea se você tem um diagnóstico ou suspeita de ceratocone, astigmatismo irregular, ou se é um candidato para cirurgia refrativa ou de catarata. Pacientes que apresentam mudanças frequentes no grau dos óculos ou dificuldade na adaptação de lentes de contato também se beneficiam deste exame.</p>
                    <p><strong>Um mapa preciso da sua córnea é o primeiro passo para uma visão mais nítida e saudável. Se o seu médico indicou este exame, realize-o para garantir o melhor cuidado para os seus olhos.</strong></p>
                    <a href="https:///wa.me/5516992627740" target="_blank" class="cta-button">Agende sua Topografia de Córnea</a>
                </section>

                <section id="faq" class="faq-section">
                    <h2>Perguntas Frequentes (FAQ)</h2>
                    
                    <details class="faq-item">
                        <summary>O exame de Topografia de Córnea dói?</summary>
                        <p>Não. O exame é completamente indolor e não há contato do aparelho com os olhos.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Preciso suspender o uso de lentes de contato?</summary>
                        <p>Sim. É fundamental suspender o uso de lentes de contato por alguns dias antes do exame, conforme a orientação do seu médico. Lentes gelatinosas geralmente requerem um período menor de suspensão do que as rígidas.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Precisa dilatar a pupila para o exame?</summary>
                        <p>Não, para a realização da topografia de córnea não é necessário dilatar as pupilas. Você pode retomar suas atividades normais logo após o exame.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Quanto tempo dura o exame?</summary>
                        <p>A captura das imagens é extremamente rápida, levando apenas alguns segundos para cada olho.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Qual a diferença entre Topografia e Tomografia de Córnea?</summary>
                        <p>A Topografia de Córnea (Ceratoscopia) analisa a curvatura da superfície anterior da córnea. Já a Tomografia de Córnea (como o exame Pentacam) é mais completa, pois analisa a córnea em 3D, avaliando a curvatura anterior e posterior, a espessura em toda a sua extensão e outras estruturas do segmento anterior do olho. A tomografia é frequentemente solicitada para complementar a topografia, especialmente em casos de suspeita de ceratocone e planejamento cirúrgico.</p>
                    </details>
                </section>
            </article>
        `
  },
  {
    label: 'Retinografia Colorida',
    title: 'Retinografia Colorida: O Mapa Detalhado da Saúde dos Seus Olhos',
    description:
      'Entenda o que é a Retinografia Colorida, um exame essencial para diagnosticar e acompanhar doenças como retinopatia diabética, glaucoma e DMRI. Saiba como o procedimento funciona, suas principais indicações e veja as respostas para as dúvidas mais comuns. Um guia completo para pacientes.',
    slug: 'Retinografia-Colorida-O-Mapa-Detalhado-da-Saude-dos-Seus-Olhos',
    imageUrl: RetImage,
    content: `
                <article>
                <header>
                    <h1>Retinografia Colorida: O Mapa Detalhado da Saúde dos Seus Olhos</h1>
                </header>
                
                <section id="o-que-e">
                    <p>A <strong>Retinografia Colorida</strong>, também conhecida como Retinografia Simples ou Fotografia do Fundo do Olho, é um dos exames mais importantes e realizados na prática oftalmológica. Trata-se de uma fotografia em alta resolução do fundo do seu olho, que inclui a <strong>retina, o nervo óptico e os vasos sanguíneos</strong>.</p>
                    <p>Este exame cria um mapa visual detalhado que serve como um documento essencial da saúde ocular do paciente. Ele permite que o oftalmologista detecte, documente e acompanhe a evolução de diversas doenças ao longo do tempo. Nesta página, vamos explorar tudo sobre este procedimento fundamental para a prevenção da cegueira.</p>
                </section>

                <section id="como-funciona">
                    <h2>O que é a Retinografia Colorida?</h2>
                    <p>A Retinografia é realizada por um aparelho chamado retinógrafo. Este equipamento utiliza uma câmera fotográfica digital de alta tecnologia acoplada a um microscópio de baixo poder. Ele projeta um flash de luz para iluminar o interior do olho, capturando uma imagem nítida e colorida da sua superfície posterior.</p>
                    <p>O resultado é uma foto panorâmica do fundo do olho, que pode ser armazenada digitalmente para comparações futuras. Isso permite ao médico analisar com precisão as estruturas e identificar qualquer alteração suspeita com grande clareza.</p>
                </section>

                <section id="indicacoes">
                    <h2>Para que Serve o Exame de Retinografia? A Importância da Documentação Fotográfica</h2>
                    <p>A Retinografia Colorida é uma ferramenta vital para o diagnóstico e, principalmente, para o acompanhamento de muitas condições oculares. Ao comparar fotos de diferentes consultas, o oftalmologista pode determinar se uma doença está estável ou progredindo. Suas principais indicações são:</p>
                    <ul>
                        <li><strong>Retinopatia Diabética:</strong> É o exame padrão para rastrear e acompanhar os danos causados pelo diabetes nos vasos sanguíneos da retina. Permite identificar hemorragias, exsudatos (depósitos de gordura) e neovasos.</li>
                        <li><strong>Glaucoma:</strong> A fotografia do nervo óptico é crucial para avaliar sua escavação e a palidez do disco óptico, sinais característicos do glaucoma. A comparação ao longo dos anos é fundamental para monitorar a progressão da doença.</li>
                        <li><strong>Degeneração Macular Relacionada à Idade (DMRI):</strong> Ajuda a visualizar drusas, alterações de pigmento e outras anomalias na mácula, a região central da visão.</li>
                        <li><strong>Oclusões Vasculares da Retina:</strong> Permite identificar áreas de isquemia (falta de circulação) e hemorragias decorrentes de "derrames" nos vasos da retina.</li>
                        <li><strong>Alta Miopia:</strong> Pacientes com alto grau de miopia têm maior risco de alterações na retina e no nervo óptico, que podem ser monitoradas com a retinografia.</li>
                        <li><strong>Documentação de Lesões:</strong> É usada para documentar tumores, cicatrizes, "pintas" (nevos) e outras lesões no fundo do olho, permitindo uma avaliação comparativa precisa ao longo do tempo.</li>
                    </ul>
                </section>

                <section id="como-e-feito">
                    <h2>Como é Realizado o Exame de Retinografia?</h2>
                    <p>O procedimento é muito simples, rápido e indolor.</p>
                    <ol>
                        <li><strong>Preparação:</strong> Na maioria dos casos, é necessário dilatar a pupila com colírios para obter uma imagem ampla e clara do fundo do olho. Por isso, é indispensável que o paciente venha <strong>acompanhado</strong>, pois a visão ficará embaçada e a sensibilidade à luz aumentará por algumas horas.</li>
                        <li><strong>Posicionamento:</strong> Você se sentará em frente ao retinógrafo, posicionando o queixo e a testa em um suporte para manter a cabeça estável.</li>
                        <li><strong>Captura da Imagem:</strong> Você será orientado a olhar para uma luz específica. O profissional que realiza o exame irá focar a imagem e, no momento do clique, você verá um flash de luz, semelhante ao de uma câmera fotográfica comum. O processo dura poucos minutos.</li>
                    </ol>
                    <p>As imagens são geradas instantaneamente e podem ser analisadas pelo seu médico no mesmo dia.</p>
                </section>

                <section id="vantagens">
                    <h2>Principais Vantagens da Retinografia Colorida</h2>
                    <ul>
                        <li><strong>Visão Panorâmica:</strong> Oferece uma visão ampla e geral do fundo do olho.</li>
                        <li><strong>Documentação Precisa:</strong> Cria um registro permanente para acompanhamento e comparação.</li>
                        <li><strong>Não Invasivo e Rápido:</strong> Realizado em poucos minutos e sem contato com o olho.</li>
                        <li><strong>Fundamental para o Acompanhamento:</strong> Essencial para monitorar a progressão de doenças crônicas como glaucoma e diabetes.</li>
                        <li><strong>Custo-Efetivo:</strong> É um exame acessível e amplamente disponível.</li>
                    </ul>
                </section>

                <section id="quem-deve-fazer">
                    <h2>Quem Deve Fazer o Exame de Retinografia?</h2>
                    <p>Seu oftalmologista pode solicitar a Retinografia se você for portador de diabetes, glaucoma, DMRI, alta miopia ou qualquer outra condição que afete a retina e o nervo óptico. Também é um exame importante para a documentação inicial do estado do fundo de olho de qualquer paciente.</p>
                    <p><strong>A saúde dos seus olhos merece ser registrada em detalhes. Se o seu médico solicitou a Retinografia, realize o exame e garanta o melhor acompanhamento para sua visão.</strong></p>
                    <a href="https:///wa.me/5516992627740" target="_blank" class="cta-button">Agende sua Retinografia Agora</a>
                </section>

                <section id="faq" class="faq-section">
                    <h2>Perguntas Frequentes (FAQ)</h2>
                    
                    <details class="faq-item">
                        <summary>O exame de Retinografia dói?</summary>
                        <p>Não. O exame é totalmente indolor. O único desconforto pode ser o flash de luz, que é breve e inofensivo.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Preciso de acompanhante para fazer a Retinografia?</summary>
                        <p>Sim, é essencial vir com um acompanhante. A dilatação da pupila, necessária para o exame, causa embaçamento visual e sensibilidade à luz que podem durar algumas horas, impedindo você de dirigir.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Quanto tempo dura o exame?</summary>
                        <p>A captura das imagens é muito rápida, levando apenas alguns minutos. O tempo total na clínica pode ser maior devido à espera para a dilatação da pupila.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Qual a diferença entre a Retinografia e a Tomografia de Coerência Óptica (OCT)?</summary>
                        <p>São exames complementares. A Retinografia é uma <strong>foto 2D da superfície</strong> do fundo do olho, como um mapa. A OCT é um <strong>escaneamento que cria imagens em cortes (3D)</strong>, mostrando as camadas internas da retina e do nervo óptico, como uma tomografia. A Retinografia mostra "o que" está na superfície, enquanto a OCT mostra "o que" está acontecendo por dentro das camadas.</p>
                    </details>

                    <details class="faq-item">
                        <summary>O meu plano de saúde cobre a Retinografia?</summary>
                        <p>Sim, a Retinografia Colorida é um exame coberto pela maioria dos planos de saúde, pois está no rol de procedimentos da ANS. Confirme as condições específicas com a sua operadora.</p>
                    </details>
                </section>
            </article>
        `
  },
  {
    label: 'Microscopia Especular de Córnea',
    title:
      'Microscopia Especular de Córnea: Um Olhar Profundo na Saúde da Sua Visão',
    description:
      'Descubra o que é a Microscopia Especular de Córnea, um exame essencial para avaliar a saúde das células endoteliais. Saiba para que serve, sua importância antes de cirurgias de catarata, como é feito e o que esperar do procedimento. Um guia completo para pacientes.',
    slug: 'microscopia-especular-de-cornea-guia-completo',
    imageUrl: MecImage,
    content: `
                <article>
                <header>
                    <h1>Microscopia Especular de Córnea: A Guardiã da Transparência Ocular</h1>
                </header>
                
                <section id="o-que-e">
                    <p>A <strong>Microscopia Especular de Córnea</strong> é um exame de imagem altamente especializado e não invasivo que permite ao oftalmologista analisar em detalhe uma camada celular vital para a nossa visão: o <strong>endotélio corneano</strong>. Essa fina camada, localizada na parte mais interna da córnea, é responsável por manter a córnea transparente e sem inchaço, funcionando como uma bomba que regula a quantidade de fluidos em seu interior.</p>
                    <p>Nesta página, você vai entender por que este exame é tão importante, como ele é realizado e qual o seu papel na segurança de procedimentos cirúrgicos e no diagnóstico de doenças da córnea.</p>
                </section>

                <section id="como-funciona">
                    <h2>O que a Microscopia Especular Avalia?</h2>
                    <p>Diferente de outros exames, a Microscopia Especular funciona como um poderoso "microscópio fotográfico" focado especificamente nas células do endotélio. Com o passar da idade ou devido a certas doenças e traumas, o número de células endoteliais diminui. O problema é que <strong>essas células não se regeneram</strong>.</p>
                    <p>O exame, então, realiza uma contagem precisa dessas células, avaliando não apenas a quantidade (densidade celular), mas também o formato (pleomorfismo) e o tamanho (polimegatismo) delas. Uma baixa densidade ou alterações no formato e tamanho podem indicar que a córnea está fragilizada e tem menor capacidade de se recuperar de um estresse, como uma cirurgia ocular.</p>
                </section>

                <section id="indicacoes">
                    <h2>Para que Serve o Exame? As Principais Indicações</h2>
                    <p>A avaliação precisa do endotélio corneano é crucial em diversas situações, tornando a Microscopia Especular indispensável para:</p>
                    <ul>
                        <li><strong>Pré-operatório de Cirurgia de Catarata:</strong> Esta é a sua indicação mais comum. O exame avalia se a córnea do paciente tem células saudáveis e em número suficiente para suportar o procedimento cirúrgico, minimizando o risco de complicações no pós-operatório, como o edema de córnea.</li>
                        <li><strong>Pré-operatório de outras Cirurgias Intraoculares:</strong> É fundamental antes de cirurgias refrativas, transplantes de córnea e implantes de lentes fácicas (ICL).</li>
                        <li><strong>Diagnóstico e Acompanhamento de Doenças da Córnea:</strong> Essencial para diagnosticar e monitorar a progressão de doenças que afetam primariamente o endotélio, como a Distrofia de Fuchs e outras distrofias corneanas.</li>
                        <li><strong>Usuários de Lentes de Contato:</strong> Em casos de uso prolongado ou inadequado de lentes de contato, o exame pode avaliar se houve algum dano ou sofrimento às células endoteliais.</li>
                        <li><strong>Avaliação de Traumas Oculares:</strong> Ajuda a determinar a extensão do dano ao endotélio após um trauma na região dos olhos.</li>
                    </ul>
                </section>

                <section id="como-e-feito">
                    <h2>Como é Realizado o Exame de Microscopia Especular?</h2>
                    <p>O procedimento é extremamente simples, rápido e não causa nenhum desconforto.</p>
                    <ol>
                        <li><strong>Preparação:</strong> Não há nenhuma preparação especial. Não é necessário jejuar ou dilatar a pupila. Se você for usuário de lentes de contato, pode ser solicitado que as retire antes do exame.</li>
                        <li><strong>Posicionamento:</strong> Você se sentará confortavelmente em uma cadeira, posicionando o queixo e a testa em um suporte no aparelho, semelhante a outros exames oftalmológicos.</li>
                        <li><strong>Realização do Exame:</strong> O aparelho fotografa as células da sua córnea sem tocá-la. Você será instruído a olhar para um ponto fixo e piscar normalmente. O equipamento realiza a captura das imagens em poucos segundos. O processo é totalmente indolor.</li>
                    </ol>
                    <p>Um software especializado analisa as imagens, e o resultado com a contagem e análise morfológica das células é liberado rapidamente para avaliação do médico.</p>
                </section>

                <section id="vantagens">
                    <h2>Principais Vantagens da Microscopia Especular</h2>
                    <ul>
                        <li><strong>Segurança Cirúrgica:</strong> Aumenta a segurança de cirurgias como a de catarata.</li>
                        <li><strong>Análise Detalhada:</strong> Fornece uma avaliação quantitativa e qualitativa das células endoteliais.</li>
                        <li><strong>Não Invasivo e Indolor:</strong> Sem contato com o olho e sem dor.</li>
                        <li><strong>Rápido e Eficiente:</strong> O exame é concluído em menos de 5 minutos.</li>
                        <li><strong>Diagnóstico Preciso:</strong> Fundamental para o diagnóstico de doenças específicas da córnea.</li>
                    </ul>
                </section>

                <section id="quem-deve-fazer">
                    <h2>Quem Deve Fazer o Exame?</h2>
                    <p>Seu oftalmologista irá solicitar a Microscopia Especular principalmente se você for um candidato à cirurgia de catarata ou a qualquer outro procedimento intraocular. O exame também é indicado para pacientes com suspeita ou diagnóstico de distrofias da córnea, ou para aqueles com histórico de trauma ocular ou uso prolongado de lentes de contato.</p>
                    <p><strong>Cuidar da saúde do endotélio é cuidar da transparência da sua visão. Converse com seu médico sobre a necessidade deste exame e garanta a máxima segurança para seus olhos.</strong></p>
                    <a href="https:///wa.me/5516992627740" target="_blank" class="cta-button">Agende sua Microscopia Especular</a>
                </section>

                <section id="faq" class="faq-section">
                    <h2>Perguntas Frequentes (FAQ)</h2>
                    
                    <details class="faq-item">
                        <summary>O exame de Microscopia Especular dói?</summary>
                        <p>Não. O exame é totalmente indolor, rápido e não envolve nenhum contato físico com seus olhos.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Preciso de acompanhante para fazer o exame?</summary>
                        <p>Não é necessário. Como o exame não exige dilatação da pupila, sua visão não ficará embaçada, e você poderá dirigir e retomar suas atividades normais imediatamente após o procedimento.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Quanto tempo leva para o resultado ficar pronto?</summary>
                        <p>O resultado é gerado pelo software do aparelho quase que instantaneamente. O laudo médico com a interpretação dos dados geralmente fica pronto no mesmo dia ou conforme a rotina da clínica.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Qual a importância deste exame antes da cirurgia de catarata?</summary>
                        <p>É crucial. A cirurgia de catarata, embora segura, representa um estresse para a córnea. O exame garante que o paciente tenha uma reserva de células endoteliais suficiente para manter a córnea transparente após a cirurgia, evitando uma complicação chamada ceratopatia bolhosa.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Existe alguma contraindicação para o exame?</summary>
                        <p>Não há contraindicações significativas. O exame pode ser difícil de realizar apenas em casos de opacidade muito severa da córnea que impeça a visualização do endotélio.</p>
                    </details>
                </section>
            </article>
        `
  },
  {
    label: 'Biometria Óptica',
    title: 'Biometria Óptica: A Medida Exata para uma Visão Perfeita',
    description:
      'Descubra o que é a Biometria Óptica, o exame padrão-ouro para o cálculo da lente intraocular na cirurgia de catarata. Entenda sua importância para a precisão do resultado, como é feito o procedimento e suas vantagens. Um guia completo para pacientes.',
    slug: 'biometria-optica-guia-completo-cirurgia-catarata',
    imageUrl: BioImage,
    content: `
                <article>
                <header>
                    <h1>Biometria Óptica: A Medida Exata para o Sucesso da Sua Cirurgia</h1>
                </header>
                
                <section id="o-que-e">
                    <p>A <strong>Biometria Óptica</strong> é um exame oftalmológico de alta tecnologia, considerado atualmente o método mais avançado e preciso para medir as diferentes estruturas do olho. Sua principal finalidade é realizar o cálculo do grau da <strong>lente intraocular (LIO)</strong>, que será implantada durante a cirurgia de catarata para substituir o cristalino opaco.</p>
                    <p>Nesta página, vamos explicar detalhadamente por que a precisão deste exame é fundamental para o sucesso da sua cirurgia e como a tecnologia de biometria óptica revolucionou o planejamento cirúrgico, visando o melhor resultado visual possível para você.</p>
                </section>

                <section id="como-funciona">
                    <h2>O que é e Como Funciona a Biometria Óptica?</h2>
                    <p>A Biometria Óptica utiliza uma tecnologia de interferometria de coerência parcial, um tipo de feixe de luz de baixa energia, para escanear o olho e obter medidas extremamente precisas. Diferente dos métodos mais antigos, como a biometria ultrassônica, este exame é <strong>totalmente sem contato</strong>, o que aumenta o conforto e a precisão.</p>
                    <p>O aparelho mede em segundos vários parâmetros essenciais do globo ocular, incluindo:</p>
                    <ul>
                        <li><strong>Comprimento Axial:</strong> A distância exata entre a frente e o fundo do olho.</li>
                        <li><strong>Ceratometria (K):</strong> A curvatura da córnea.</li>
                        <li><strong>Profundidade da Câmara Anterior:</strong> O espaço entre a córnea e a íris.</li>
                        <li><strong>Espessura do Cristalino.</strong></li>
                    </ul>
                    <p>Com base nessas medidas, softwares com fórmulas biométricas avançadas calculam o poder dióptrico (o "grau") ideal da lente intraocular a ser implantada, personalizando a cirurgia para as características únicas de cada olho.</p>
                </section>

                <section id="indicacoes">
                    <h2>Para que Serve o Exame? A Chave para a Cirurgia de Catarata</h2>
                    <p>A precisão no cálculo da lente intraocular é o que determina se, após a cirurgia de catarata, o paciente terá um bom resultado visual sem a necessidade de óculos para longe, ou com uma dependência muito menor deles. As principais indicações da Biometria Óptica são:</p>
                    <ul>
                        <li><strong>Planejamento de Cirurgia de Catarata:</strong> É a indicação mais importante e rotineira. O exame é obrigatório para calcular a LIO que substituirá o cristalino.</li>
                        <li><strong>Cálculo de Lentes Premium:</strong> Essencial para o cálculo de lentes intraoculares mais avançadas, como as tóricas (para correção de astigmatismo) e as multifocais ou de foco estendido (para correção da visão de perto e longe, a chamada "vista cansada").</li>
                        <li><strong>Cirurgia Refrativa de Cristalino Transparente:</strong> Utilizada em pacientes que desejam corrigir altos graus de miopia ou hipermetropia através da troca do cristalino, mesmo sem ter catarata.</li>
                        <li><strong>Acompanhamento de Miopia em Crianças:</strong> Em alguns casos, o exame pode ser usado para monitorar o crescimento do olho (aumento do comprimento axial) em crianças com miopia progressiva.</li>
                    </ul>
                </section>

                <section id="como-e-feito">
                    <h2>Como é Realizado o Exame de Biometria Óptica?</h2>
                    <p>O procedimento é extremamente simples, rápido e totalmente indolor.</p>
                    <ol>
                        <li><strong>Preparação:</strong> Não é necessária nenhuma preparação especial, como jejum ou acompanhante. A dilatação da pupila geralmente não é necessária. Se você for usuário de lentes de contato, é importante suspender o uso por alguns dias antes do exame, conforme orientação do seu médico.</li>
                        <li><strong>Posicionamento:</strong> Você se sentará confortavelmente em frente ao biômetro, posicionando o queixo e a testa em um suporte para manter a cabeça firme.</li>
                        <li><strong>Realização do Exame:</strong> Você será orientado a fixar o olhar em um ponto de luz dentro do aparelho. O equipamento fará a varredura do olho em poucos segundos, sem nenhum contato físico. O processo é repetido para o outro olho.</li>
                    </ol>
                    <p>Os resultados das medições e o cálculo da lente são gerados instantaneamente para que o cirurgião oftalmologista possa planejar o procedimento.</p>
                </section>

                <section id="vantagens">
                    <h2>Principais Vantagens da Biometria Óptica</h2>
                    <ul>
                        <li><strong>Máxima Precisão:</strong> É o método mais preciso para medir o olho, reduzindo as chances de erros refrativos ("grau residual") após a cirurgia.</li>
                        <li><strong>Não Invasivo e Sem Contato:</strong> Aumenta o conforto do paciente e elimina o risco de compressão da córnea, que poderia alterar as medidas.</li>
                        <li><strong>Rápido e Conveniente:</strong> O exame completo leva apenas alguns minutos.</li>
                        <li><strong>Resultados Confiáveis:</strong> Permite o uso de fórmulas de cálculo de última geração, essenciais para lentes premium.</li>
                        <li><strong>Indolor:</strong> Não há necessidade de colírios anestésicos.</li>
                    </ul>
                </section>

                <section id="quem-deve-fazer">
                    <h2>Quem Deve Fazer o Exame?</h2>
                    <p>A Biometria Óptica é um exame padrão e indispensável para todos os pacientes que serão submetidos a uma cirurgia de catarata. A qualidade do seu resultado visual e sua satisfação pós-operatória dependem diretamente da precisão das medidas obtidas neste exame.</p>
                    <p><strong>Garanta o melhor para a sua visão. Converse com seu oftalmologista sobre a importância da Biometria Óptica no planejamento da sua cirurgia de catarata.</strong></p>
                    <a href="https:///wa.me/5516992627740" target="_blank" class="cta-button">Agende sua Biometria Óptica</a>
                </section>

                <section id="faq" class="faq-section">
                    <h2>Perguntas Frequentes (FAQ)</h2>
                    
                    <details class="faq-item">
                        <summary>O exame de Biometria Óptica dói?</summary>
                        <p>Não, o exame é completamente indolor. O aparelho utiliza apenas um feixe de luz e não toca em seus olhos.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Preciso ir com acompanhante?</summary>
                        <p>Normalmente não é necessário, pois o exame não requer dilatação das pupilas, permitindo que você retome suas atividades, incluindo dirigir, logo após o procedimento.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Qual a diferença entre a biometria óptica e a ultrassônica?</summary>
                        <p>A Biometria Óptica usa luz (interferometria) e não tem contato com o olho, sendo mais precisa e confortável. A Biometria Ultrassônica (ou Ecobiometria) usa ondas de som e requer o contato de uma sonda na superfície da córnea (previamente anestesiada), o que pode levar a uma leve compressão e a medidas menos precisas. A óptica é o método preferencial hoje em dia.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Tenho que tirar minhas lentes de contato para o exame?</summary>
                        <p>Sim. É crucial suspender o uso de lentes de contato antes do exame, pois elas podem alterar a curvatura da córnea. Siga rigorosamente a orientação do seu médico sobre o tempo de suspensão necessário.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Por que este exame é tão importante para a cirurgia de catarata?</summary>
                        <p>Porque a precisão do cálculo da lente intraocular (LIO) define seu "grau" após a cirurgia. Um cálculo preciso permite alcançar a meta refrativa desejada, seja ela zerar o grau para longe ou corrigir o astigmatismo, proporcionando maior independência dos óculos.</p>
                    </details>
                </section>
            </article>
        `
  },
  {
    label: 'Capsulotomia YAG Laser',
    title:
      'Capsulotomia YAG Laser: Restaurando a Nitidez da Visão Após a Cirurgia de Catarata',
    description:
      'Sua visão ficou embaçada meses ou anos após a cirurgia de catarata? Entenda o que é a Capsulotomia YAG Laser, um procedimento simples e rápido para tratar a opacidade da cápsula posterior e restaurar a clareza visual. Saiba como funciona, quando é indicada e o que esperar.',
    slug: 'capsulotomia-yag-laser-limpeza-lente-pos-catarata',
    imageUrl: CYLImage,
    content: `
                <article>
                <header>
                    <h1>Capsulotomia YAG Laser: A Solução Rápida para a Visão Embaçada Pós-Catarata</h1>
                </header>
                
                <section id="o-que-e">
                    <p>A <strong>Capsulotomia com YAG Laser</strong> é um procedimento oftalmológico a laser, rápido e indolor, realizado para restaurar a nitidez da visão em pacientes que, meses ou anos após uma cirurgia de catarata bem-sucedida, voltam a sentir a visão embaçada ou ofuscada. Este procedimento é frequentemente chamado de "limpeza de lente", embora o termo não seja tecnicamente correto.</p>
                    <p>Nesta página, vamos explicar por que essa perda de nitidez acontece, como a Capsulotomia YAG Laser resolve o problema de forma segura e eficaz, e tudo o que você precisa saber sobre este tratamento transformador.</p>
                </section>

                <section id="por-que-e-necessaria">
                    <h2>Por que a Visão Embaça Novamente? Entendendo a Opacidade da Cápsula Posterior</h2>
                    <p>Durante a cirurgia de catarata, o cristalino opaco é removido, mas sua membrana de revestimento externa, uma fina película transparente chamada <strong>cápsula posterior</strong>, é intencionalmente deixada no lugar para servir de suporte para a nova lente intraocular (LIO).</p>
                    <p>Com o tempo, em uma parcela significativa dos pacientes, essa cápsula pode perder sua transparência e se tornar opaca. Isso ocorre devido ao crescimento de células residuais na sua superfície, um processo natural do organismo. Essa condição é chamada de <strong>Opacificação da Cápsula Posterior (OCP)</strong>. É importante entender que isso <strong>não é o retorno da catarata</strong>, mas sim uma opacificação da membrana que segura a lente artificial.</p>
                    <p>Os sintomas são muito semelhantes aos da catarata original:</p>
                    <ul>
                        <li>Visão progressivamente embaçada ou "enevoada".</li>
                        <li>Ofuscamento e sensibilidade à luz (fotofobia).</li>
                        <li>Dificuldade para enxergar à noite.</li>
                        <li>Visão de halos ao redor das luzes.</li>
                    </ul>
                </section>

                <section id="como-funciona">
                    <h2>Como a Capsulotomia YAG Laser Funciona?</h2>
                    <p>O procedimento é a solução definitiva para a Opacificação da Cápsula Posterior. Utilizando um equipamento de alta precisão, o oftalmologista aplica pulsos de <strong>YAG Laser</strong>, uma luz de energia específica, para criar uma pequena abertura no centro da cápsula posterior opacificada. </p>
                    <p>Essa abertura cria um novo caminho para a luz passar diretamente para a retina, sem obstruções. O resultado é a <strong>restauração imediata da clareza e nitidez da visão</strong>, devolvendo a qualidade visual que o paciente tinha logo após a cirurgia de catarata.</p>
                </section>

                <section id="como-e-feito">
                    <h2>Como é Realizado o Procedimento?</h2>
                    <p>A Capsulotomia YAG Laser é um procedimento ambulatorial, realizado na própria clínica ou consultório oftalmológico. É muito rápido, durando apenas alguns minutos.</p>
                    <ol>
                        <li><strong>Preparação:</strong> Primeiramente, são aplicados colírios para dilatar a pupila e, em alguns casos, um colírio para reduzir a pressão ocular.</li>
                        <li><strong>Posicionamento:</strong> Você se sentará confortavelmente em frente ao aparelho de laser, que é muito parecido com os equipamentos de exame oftalmológico de rotina, e posicionará o queixo e a testa em um suporte. Uma lente especial pode ser colocada sobre seu olho para ajudar a focar o laser.</li>
                        <li><strong>Aplicação do Laser:</strong> O médico então direciona os pulsos de laser para a cápsula posterior. Você poderá ouvir alguns cliques suaves e ver flashes de luz, mas não sentirá dor. O procedimento em si leva de 1 a 3 minutos.</li>
                    </ol>
                    <p>Após o procedimento, você poderá ir para casa. Como a pupila estará dilatada, a visão pode ficar temporariamente embaçada e sensível à luz, sendo recomendável ter um acompanhante.</p>
                </section>

                <section id="vantagens">
                    <h2>Principais Vantagens da Capsulotomia YAG Laser</h2>
                    <ul>
                        <li><strong>Extremamente Rápida:</strong> O procedimento dura apenas alguns minutos.</li>
                        <li><strong>Indolor:</strong> O paciente não sente dor durante a aplicação do laser.</li>
                        <li><strong>Segura e Eficaz:</strong> Resolve de forma definitiva a opacidade da cápsula, com altas taxas de sucesso.</li>
                        <li><strong>Não Invasiva:</strong> Não há cortes ou incisões, apenas a aplicação de luz.</li>
                        <li><strong>Recuperação Rápida:</strong> A melhora na visão é percebida rapidamente, muitas vezes no mesmo dia.</li>
                    </ul>
                </section>

                <section id="quem-deve-fazer">
                    <h2>Quando a Capsulotomia é Indicada?</h2>
                    <p>O procedimento é indicado para qualquer paciente que tenha realizado a cirurgia de catarata e que, após algum tempo, desenvolveu a Opacificação da Cápsula Posterior a ponto de comprometer a qualidade da visão e as atividades diárias.</p>
                    <p><strong>Se a sua visão voltou a ficar embaçada após a cirurgia de catarata, não se preocupe. A solução pode ser simples e rápida. Converse com seu oftalmologista.</strong></p>
                    <a href="https:///wa.me/5516992627740" target="_blank" class="cta-button">Agende sua Avaliação Oftalmológica</a>
                </section>

                <section id="faq" class="faq-section">
                    <h2>Perguntas Frequentes (FAQ)</h2>
                    
                    <details class="faq-item">
                        <summary>A Capsulotomia YAG Laser dói?</summary>
                        <p>Não. O procedimento é totalmente indolor. Você pode ouvir pequenos estalidos, mas não sentirá dor.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Preciso de acompanhante no dia do procedimento?</summary>
                        <p>Sim, é altamente recomendável ir com um acompanhante. Serão usados colírios para dilatar a pupila, o que deixará sua visão embaçada e sensível à luz por algumas horas, impossibilitando dirigir.</p>
                    </details>

                    <details class="faq-item">
                        <summary>A "sujeira" na lente pode voltar?</summary>
                        <p>Não. Uma vez que a abertura na cápsula posterior é feita com o YAG Laser, a opacidade não volta mais. O resultado é permanente.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Quais são os cuidados após o procedimento?</summary>
                        <p>Seu oftalmologista poderá prescrever um colírio anti-inflamatório por alguns dias. Fora isso, a recuperação é muito tranquila e você pode retomar a maioria das suas atividades normais no dia seguinte.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Em quanto tempo minha visão melhora?</summary>
                        <p>A melhora da visão costuma ser rápida. Muitos pacientes notam uma grande diferença assim que o efeito do colírio dilatador passa, geralmente em poucas horas ou no dia seguinte ao procedimento.</p>
                    </details>
                </section>
            </article>
        `
  },
  {
    label: 'Paquimetria',
    title:
      'Paquimetria: Medindo a Espessura da Sua Córnea para um Diagnóstico Preciso',
    description:
      'Entenda o que é a Paquimetria, o exame que mede a espessura da córnea. Descubra sua importância crucial no diagnóstico e acompanhamento do glaucoma e no planejamento de cirurgias refrativas. Um guia completo sobre como o exame é feito e para quem é indicado.',
    slug: 'paquimetria-exame-espessura-cornea-glaucoma',
    imageUrl: PaqImage,
    content: `
                <article>
                <header>
                    <h1>Paquimetria: A Medida Fundamental da Espessura da Córnea</h1>
                </header>
                
                <section id="o-que-e">
                    <p>A <strong>Paquimetria</strong> é um exame oftalmológico rápido, indolor e essencial que mede com alta precisão a <strong>espessura da córnea</strong>, a camada transparente que fica na frente do olho, funcionando como a nossa principal lente natural. Esta medida, embora simples, fornece informações valiosas que são cruciais para o diagnóstico e acompanhamento de importantes doenças oculares, como o glaucoma.</p>
                    <p>Nesta página, vamos detalhar por que conhecer a espessura da sua córnea é tão importante para a saúde dos seus olhos, como o exame é realizado e quais são suas principais indicações.</p>
                </section>

                <section id="por-que-medir">
                    <h2>Por que a Espessura da Córnea é Importante?</h2>
                    <p>A espessura da córnea é uma característica individual, como a altura ou a cor dos olhos. Descobriu-se que essa medida influencia diretamente a aferição da <strong>pressão intraocular (PIO)</strong>, o principal fator de risco para o glaucoma.</p>
                    <ul>
                        <li><strong>Córneas mais grossas:</strong> Podem superestimar artificialmente o valor da pressão intraocular. Um tonômetro (aparelho que mede a pressão) pode mostrar um valor mais alto do que o real, pois encontra maior resistência.</li>
                        <li><strong>Córneas mais finas:</strong> Podem subestimar o valor da pressão intraocular, mostrando um resultado falsamente baixo. Isso é particularmente perigoso, pois pode mascarar um quadro de hipertensão ocular, atrasando o diagnóstico de glaucoma.</li>
                    </ul>
                    <p>Portanto, a Paquimetria é a chave para o oftalmologista "calibrar" e interpretar corretamente o valor da sua pressão ocular, permitindo um diagnóstico muito mais preciso e um tratamento adequado para o glaucoma.</p>
                </section>

                <section id="indicacoes">
                    <h2>Para que Serve o Exame de Paquimetria?</h2>
                    <p>A medição da espessura corneana é fundamental em diversas áreas da oftalmologia. As principais indicações incluem:</p>
                    <ul>
                        <li><strong>Diagnóstico e Acompanhamento de Glaucoma:</strong> É uma ferramenta indispensável. Pacientes com suspeita de glaucoma ou já diagnosticados devem realizar o exame para que o médico possa interpretar corretamente a pressão ocular e definir o tratamento ideal. Uma córnea fina é considerada um fator de risco independente para a progressão do glaucoma.</li>
                        <li><strong>Avaliação para Cirurgias Refrativas:</strong> É um exame obrigatório no pré-operatório de cirurgias a laser para correção de miopia, hipermetropia e astigmatismo (LASIK, PRK). O laser remove tecido da córnea para remodelá-la, e o cirurgião precisa garantir que a espessura restante seja segura para manter a integridade estrutural do olho.</li>
                        <li><strong>Diagnóstico de Doenças da Córnea:</strong> Ajuda a identificar e acompanhar condições que causam o afinamento (como o ceratocone) ou o inchaço/edema da córnea (como a Distrofia de Fuchs).</li>
                        <li><strong>Avaliação pré e pós Transplante de Córnea.</strong></li>
                    </ul>
                </section>

                <section id="como-e-feito">
                    <h2>Como é Realizado o Exame de Paquimetria?</h2>
                    <p>O procedimento é muito rápido, levando apenas um ou dois minutos. Existem duas formas principais de realizar o exame:</p>
                    <ol>
                        <li><strong>Paquimetria Ultrassônica (de Contato):</strong> Este é o método mais tradicional.
                            <ul>
                                <li><strong>Preparação:</strong> O olho é anestesiado com uma gota de colírio.</li>
                                <li><strong>Realização:</strong> O médico encosta suavemente a ponta de uma pequena sonda (semelhante a uma caneta) na superfície da córnea. A sonda emite ondas de ultrassom que medem a espessura de forma instantânea. O procedimento é totalmente indolor devido à anestesia.</li>
                            </ul>
                        </li>
                        <li><strong>Paquimetria Óptica (Sem Contato):</strong> Realizada por aparelhos mais modernos, como tomógrafos de córnea (Pentacam, Galilei) ou biômetros ópticos.
                            <ul>
                                <li><strong>Preparação:</strong> Não requer colírios anestésicos.</li>
                                <li><strong>Realização:</strong> Você posiciona o rosto no aparelho e fixa o olhar em um ponto de luz. O equipamento escaneia a córnea com luz e calcula a espessura sem qualquer contato com o olho.</li>
                            </ul>
                        </li>
                    </ol>
                    <p>Ambos os métodos são rápidos, seguros e eficazes. A escolha depende da disponibilidade do equipamento e da preferência do médico.</p>
                </section>

                <section id="vantagens">
                    <h2>Principais Vantagens da Paquimetria</h2>
                    <ul>
                        <li><strong>Diagnóstico Confiável:</strong> Permite uma interpretação correta da pressão intraocular, essencial para o glaucoma.</li>
                        <li><strong>Aumenta a Segurança Cirúrgica:</strong> Fundamental para o planejamento de cirurgias refrativas seguras.</li>
                        <li><strong>Rápido e Indolor:</strong> O exame é concluído em poucos minutos e não causa dor.</li>
                        <li><strong>Não Invasivo:</strong> Mesmo na versão de contato, o procedimento é extremamente seguro.</li>
                        <li><strong>Informação Objetiva:</strong> Fornece um dado numérico preciso para o acompanhamento médico.</li>
                    </ul>
                </section>

                <section id="quem-deve-fazer">
                    <h2>Quem Deve Fazer o Exame?</h2>
                    <p>Seu oftalmologista pode solicitar a Paquimetria se você tiver pressão ocular no limite da normalidade, suspeita ou diagnóstico de glaucoma, histórico familiar da doença, ou se for um candidato a cirurgia refrativa. É um exame que faz parte da avaliação oftalmológica completa em muitos casos.</p>
                    <p><strong>Não subestime a importância de uma medida. Conhecer a espessura da sua córnea é um passo fundamental para um cuidado ocular preciso e preventivo.</strong></p>
                    <a href="https:///wa.me/5516992627740" target="_blank" class="cta-button">Agende seu Exame de Paquimetria</a>
                </section>

                <section id="faq" class="faq-section">
                    <h2>Perguntas Frequentes (FAQ)</h2>
                    
                    <details class="faq-item">
                        <summary>O exame de Paquimetria dói?</summary>
                        <p>Não. Na versão ultrassônica (de contato), um colírio anestésico é usado para que você não sinta absolutamente nada. Na versão óptica, não há nenhum contato com o olho. Ambos são indolores.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Preciso de acompanhante para fazer o exame?</summary>
                        <p>Não é necessário. O exame não exige dilatação da pupila e o efeito do colírio anestésico (quando usado) passa rapidamente, não afetando a visão para dirigir ou realizar outras atividades.</p>
                    </details>

                    <details class="faq-item">
                        <summary>O exame tem alguma contraindicação?</summary>
                        <p>Não há contraindicações significativas. O exame pode ser realizado em praticamente todos os pacientes, sendo adiado apenas em caso de infecção ou lesão ocular ativa.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Quanto tempo dura o exame?</summary>
                        <p>A medição em si leva menos de um minuto para ambos os olhos. É um dos exames mais rápidos da oftalmologia.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Qual a relação entre a paquimetria e o ceratocone?</summary>
                        <p>No ceratocone, a córnea se torna progressivamente mais fina e assume um formato de cone. A paquimetria é usada para medir essa espessura e monitorar a progressão da doença, sendo crucial para decidir sobre tratamentos como o Crosslinking.</p>
                    </details>
                </section>
            </article>
        `
  },
  {
    label: 'Mapeamento de Retina',
    title:
      'Mapeamento de Retina: Um Olhar Completo Sobre a Saúde dos Seus Olhos e do Seu Corpo',
    description:
      'Descubra o que é o Mapeamento de Retina, o exame de fundo de olho que permite uma análise detalhada da retina, nervo óptico e vasos sanguíneos. Entenda sua importância para detectar doenças oculares e sistêmicas, como é feito e por que é essencial na consulta oftalmológica de rotina.',
    slug: 'mapeamento-de-retina-exame-fundo-de-olho-guia-completo',
    imageUrl: MapImage,
    content: `
                <article>
                <header>
                    <h1>Mapeamento de Retina: A Janela Para a Saúde dos Seus Olhos</h1>
                </header>
                
                <section id="o-que-e">
                    <p>O <strong>Mapeamento de Retina</strong>, também conhecido como <strong>Exame de Fundo de Olho</strong> ou Fundoscopia, é um dos exames mais importantes e fundamentais da consulta oftalmológica. Ele permite que o médico visualize de forma ampla e detalhada as estruturas localizadas no fundo do olho, incluindo a <strong>retina</strong>, o <strong>nervo óptico</strong> e os <strong>vasos sanguíneos</strong>.</p>
                    <p>Este exame não avalia apenas a saúde ocular. Como os vasos sanguíneos da retina são os únicos do corpo humano que podem ser observados diretamente, o mapeamento de retina funciona como uma verdadeira janela para a saúde geral do paciente, podendo revelar sinais de doenças sistêmicas como diabetes e hipertensão. Nesta página, você entenderá por que este exame é tão vital para a prevenção e diagnóstico precoce.</p>
                </section>

                <section id="o-que-avalia">
                    <h2>O que o Mapeamento de Retina Avalia?</h2>
                    <p>Através do mapeamento, o oftalmologista realiza uma varredura completa da periferia da retina até a sua porção central (mácula) e o nervo óptico. O objetivo é analisar as condições dessas estruturas e procurar por qualquer tipo de alteração, como:</p>
                    <ul>
                        <li>A saúde e a aparência do <strong>nervo óptico</strong>, fundamental na investigação do glaucoma.</li>
                        <li>O estado dos <strong>vasos sanguíneos (artérias e veias)</strong>, buscando por estreitamentos, cruzamentos patológicos ou sinais de hemorragia.</li>
                        <li>A integridade da <strong>retina periférica</strong>, procurando por lesões, rasgos ou buracos que possam levar a um descolamento de retina.</li>
                        <li>A condição da <strong>mácula</strong>, a área central da retina responsável pela visão de detalhes.</li>
                    </ul>
                </section>

                <section id="indicacoes">
                    <h2>Para que Serve o Exame? Detecção de Doenças Oculares e Sistêmicas</h2>
                    <p>O Mapeamento de Retina é essencial para o diagnóstico e acompanhamento de uma vasta gama de condições. Suas principais indicações incluem:</p>
                    <ul>
                        <li><strong>Check-up de Rotina:</strong> É um exame fundamental em qualquer consulta oftalmológica completa para pessoas de todas as idades.</li>
                        <li><strong>Pacientes Diabéticos:</strong> Obrigatório para o rastreio da <strong>Retinopatia Diabética</strong>, uma das maiores causas de cegueira no mundo.</li>
                        <li><strong>Pacientes com Hipertensão Arterial:</strong> Permite avaliar os danos causados pela pressão alta nos vasos sanguíneos do olho.</li>
                        <li><strong>Miopia Elevada:</strong> Pacientes com alto grau de miopia têm maior risco de desenvolver lesões na periferia da retina e descolamento.</li>
                        <li><strong>Suspeita de Glaucoma:</strong> Para avaliar a escavação e a aparência do nervo óptico.</li>
                        <li><strong>Sintomas Visuais:</strong> Indicado para pacientes que relatam flashes de luz (fotopsias), "moscas volantes" (manchas escuras flutuantes), ou baixa de visão súbita.</li>
                        <li><strong>Acompanhamento de Doenças:</strong> Usado para monitorar a progressão de doenças da retina e do nervo óptico.</li>
                        <li><strong>Uso de Medicações:</strong> Certos medicamentos, como a Cloroquina, podem ser tóxicos para a retina, exigindo acompanhamento regular.</li>
                    </ul>
                </section>

                <section id="como-e-feito">
                    <h2>Como é Realizado o Exame de Mapeamento de Retina?</h2>
                    <p>O procedimento é realizado pelo oftalmologista no próprio consultório e é dividido em duas etapas:</p>
                    <ol>
                        <li><strong>Preparação (Dilatação da Pupila):</strong> O passo mais importante é a aplicação de colírios para dilatar a pupila. A pupila funciona como uma "porta" de entrada para o fundo do olho. Dilatá-la (aumentar seu tamanho) permite que o médico tenha um campo de visão amplo e completo da retina. A dilatação leva de 20 a 30 minutos para fazer efeito.</li>
                        <li><strong>Realização do Exame:</strong> Com a pupila dilatada, o paciente senta-se na cadeira de exame. O médico utiliza um aparelho chamado <strong>oftalmoscópio indireto</strong> (um capacete com uma luz acoplada) e uma lente de mão para projetar a luz dentro do olho e observar a imagem ampliada e em três dimensões do fundo do olho. O médico pedirá que você olhe em diferentes direções (para cima, para baixo, para os lados) para que ele possa examinar toda a extensão da retina.</li>
                    </ol>
                    <p>O exame em si é rápido, durando cerca de 5 a 10 minutos. O único desconforto pode ser a sensibilidade à luz intensa utilizada.</p>
                </section>

                <section id="vantagens">
                    <h2>Principais Vantagens do Mapeamento de Retina</h2>
                    <ul>
                        <li><strong>Visão Abrangente:</strong> Permite uma análise completa de toda a retina, do centro à periferia.</li>
                        <li><strong>Diagnóstico Precoce:</strong> Detecta doenças em estágios iniciais, muitas vezes antes de causarem sintomas.</li>
                        <li><strong>Prevenção:</strong> Identifica lesões periféricas que, se tratadas com laser, podem prevenir o descolamento de retina.</li>
                        <li><strong>Exame Não Invasivo:</strong> Apesar da luz intensa, não há contato direto ou dor.</li>
                        <li><strong>Avaliação da Saúde Geral:</strong> Fornece pistas importantes sobre a saúde do corpo inteiro.</li>
                    </ul>
                </section>

                <section id="quem-deve-fazer">
                    <h2>Quem Deve Fazer o Exame?</h2>
                    <p>O Mapeamento de Retina deve ser parte da avaliação oftalmológica regular de todos. É especialmente crucial para diabéticos, hipertensos, pessoas com mais de 40 anos, míopes, pacientes com histórico familiar de doenças oculares ou qualquer pessoa que apresente sintomas visuais novos, como flashes de luz ou o surgimento de "moscas volantes".</p>
                    <p><strong>Cuidar do fundo do olho é cuidar da sua visão e da sua saúde. Não negligencie este exame fundamental.</strong></p>
                    <a href="https:///wa.me/5516992627740" target="_blank" class="cta-button">Agende seu Mapeamento de Retina</a>
                </section>

                <section id="faq" class="faq-section">
                    <h2>Perguntas Frequentes (FAQ)</h2>
                    
                    <details class="faq-item">
                        <summary>O Mapeamento de Retina dói?</summary>
                        <p>Não. O exame em si é indolor. O único desconforto é a sensibilidade à luz forte usada pelo médico para iluminar o interior do olho.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Preciso obrigatoriamente de um acompanhante?</summary>
                        <p>Sim, é indispensável e obrigatório vir com um acompanhante. O uso de colírios para dilatar a pupila deixa a visão muito embaçada e com extrema sensibilidade à luz por algumas horas (em média, de 4 a 6 horas). É perigoso e proibido dirigir ou realizar tarefas que exijam visão nítida após o exame.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Qual a diferença entre Mapeamento de Retina e Retinografia?</summary>
                        <p>O Mapeamento de Retina é o exame dinâmico que o médico realiza em tempo real, observando o fundo do olho em 3D. A Retinografia é uma fotografia colorida e em 2D do fundo do olho, que serve para documentar e comparar a evolução de lesões ao longo do tempo. Um exame não substitui o outro, eles são complementares.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Por quanto tempo a pupila fica dilatada?</summary>
                        <p>O efeito dos colírios dilatadores dura, em média, de 4 a 6 horas, mas pode variar de pessoa para pessoa. Levar óculos de sol pode ajudar a diminuir o desconforto com a claridade após o exame.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Com que frequência devo fazer o exame?</summary>
                        <p>A frequência ideal será determinada pelo seu oftalmologista. Para pessoas saudáveis, pode ser anual. Para diabéticos, hipertensos ou pacientes com outras condições, o acompanhamento pode ser semestral ou até mais frequente.</p>
                    </details>
                </section>
            </article>
        `
  }
];
