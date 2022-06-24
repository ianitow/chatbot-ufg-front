const courses = [
  {
    label: 'Agronomia',
    value: 'Agronomia',
  },
  {
    label: 'Arquitetura e Urbanismo',
    value: 'Arquitetura e Urbanismo',
  },
  {
    label: 'Artes Visuais',
    value: 'Artes Visuais',
  },
  {
    label: 'Artes Visuais',
    value: 'Artes Visuais',
  },
  {
    label: 'Biblioteconomia',
    value: 'Biblioteconomia',
  },
  {
    label: 'Biomedicina',
    value: 'Biomedicina',
  },
  {
    label: 'Biotecnologia',
    value: 'Biotecnologia',
  },
  {
    label: 'Ciências Ambientais',
    value: 'Ciências Ambientais',
  },
  {
    label: 'Ciências Biológicas',
    value: 'Ciências Biológicas',
  },
  {
    label: 'Ciências Biológicas',
    value: 'Ciências Biológicas',
  },
  {
    label: 'Ciências da Computação',
    value: 'Ciências da Computação',
  },
  {
    label: 'Ciências Contábeis',
    value: 'Ciências Contábeis',
  },
  {
    label: 'Ciências Econômicas',
    value: 'Ciências Econômicas',
  },
  {
    label: 'Ciências Sociais',
    value: 'Ciências Sociais',
  },
  {
    label: 'Ciências Sociais',
    value: 'Ciências Sociais',
  },
  {
    label: 'Ciências Sociais: Políticas Públicas',
    value: 'Ciências Sociais: Políticas Públicas',
  },
  {
    label: 'Comunicação Social: Publicidade e Propaganda',
    value: 'Comunicação Social: Publicidade e Propaganda',
  },
  {
    label: 'Dança',
    value: 'Dança',
  },
  {
    label: 'Design de Ambientes',
    value: 'Design de Ambientes',
  },
  {
    label: 'Design de Moda',
    value: 'Design de Moda',
  },
  {
    label: 'Design Gráfico',
    value: 'Design Gráfico',
  },
  {
    label: 'Direção de Arte',
    value: 'Direção de Arte',
  },
  {
    label: 'Direito',
    value: 'Direito',
  },
  {
    label: 'Ecologia e Análise Ambiental',
    value: 'Ecologia e Análise Ambiental',
  },
  {
    label: 'Educação Física',
    value: 'Educação Física',
  },
  {
    label: 'Educação Física',
    value: 'Educação Física',
  },
  {
    label: 'Educação Intercultural',
    value: 'Educação Intercultural',
  },
  {
    label: 'Educação do Campo',
    value: 'Educação do Campo',
  },
  {
    label: 'Enfermagem',
    value: 'Enfermagem',
  },
  {
    label: 'Engenharia Ambiental e Sanitária',
    value: 'Engenharia Ambiental e Sanitária',
  },
  {
    label: 'Engenharia Civil',
    value: 'Engenharia Civil',
  },
  {
    label: 'Engenharia de Alimentos',
    value: 'Engenharia de Alimentos',
  },
  {
    label: 'Engenharia da Computação',
    value: 'Engenharia da Computação',
  },
  {
    label: 'Engenharia de Produção',
    value: 'Engenharia de Produção',
  },
  {
    label: 'Engenharia de Software',
    value: 'Engenharia de Software',
  },
  {
    label: 'Engenharia de Transportes',
    value: 'Engenharia de Transportes',
  },
  {
    label: 'Engenharia Elétrica',
    value: 'Engenharia Elétrica',
  },
  {
    label: 'Engenharia Física',
    value: 'Engenharia Física',
  },
  {
    label: 'Engenharia Florestal',
    value: 'Engenharia Florestal',
  },
  {
    label: 'Engenharia Mecânica',
    value: 'Engenharia Mecânica',
  },
  {
    label: 'Engenharia Química',
    value: 'Engenharia Química',
  },
  {
    label: 'Estatística',
    value: 'Estatística',
  },
  {
    label: 'Farmácia',
    value: 'Farmácia',
  },
  {
    label: 'Filosofia',
    value: 'Filosofia',
  },
  {
    label: 'Filosofia',
    value: 'Filosofia',
  },
  {
    label: 'Física',
    value: 'Física',
  },
  {
    label: 'Física',
    value: 'Física',
  },
  {
    label: 'Física Médica',
    value: 'Física Médica',
  },
  {
    label: 'Geografia',
    value: 'Geografia',
  },
  {
    label: 'Geografia',
    value: 'Geografia',
  },
  {
    label: 'Geologia',
    value: 'Geologia',
  },
  {
    label: 'Gestão da Informação',
    value: 'Gestão da Informação',
  },
  {
    label: 'História',
    value: 'História',
  },
  {
    label: 'História',
    value: 'História',
  },
  {
    label: 'Jornalismo',
    value: 'Jornalismo',
  },
  {
    label: 'Letras: Espanhol',
    value: 'Letras: Espanhol',
  },
  {
    label: 'Letras: Linguística',
    value: 'Letras: Linguística',
  },
  {
    label: 'Letras: Estudos Literários',
    value: 'Letras: Estudos Literários',
  },
  {
    label: 'Letras: Francês',
    value: 'Letras: Francês',
  },
  {
    label: 'Letras: Inglês',
    value: 'Letras: Inglês',
  },
  {
    label: 'Letras: Libras',
    value: 'Letras: Libras',
  },
  {
    label: 'Letras: Português',
    value: 'Letras: Português',
  },
  {
    label: 'Letras: Tradução e Interpretação em Libras/Português',
    value: 'Letras: Tradução e Interpretação em Libras/Português',
  },
  {
    label: 'Matemática',
    value: 'Matemática',
  },
  {
    label: 'Matemática',
    value: 'Matemática',
  },
  {
    label: 'Medicina',
    value: 'Medicina',
  },
  {
    label: 'Medicina Veterinária',
    value: 'Medicina Veterinária',
  },
  {
    label: 'Museologia',
    value: 'Museologia',
  },
  {
    label: 'Música: Canto',
    value: 'Música: Canto',
  },
  {
    label: 'Música: Canto',
    value: 'Música: Canto',
  },
  {
    label: 'Música: Composição',
    value: 'Música: Composição',
  },
  {
    label: 'Música: Educação Musical',
    value: 'Música: Educação Musical',
  },
  {
    label: 'Música: Ensino do Instrumento Musical',
    value: 'Música: Ensino do Instrumento Musical',
  },
  {
    label: 'Música: Instrumento Musical',
    value: 'Música: Instrumento Musical',
  },
  {
    label: 'Música: Regência',
    value: 'Música: Regência',
  },
  {
    label: 'Musicoterapia',
    value: 'Musicoterapia',
  },
  {
    label: 'Nutrição',
    value: 'Nutrição',
  },
  {
    label: 'Odontologia',
    value: 'Odontologia',
  },
  {
    label: 'Pedagogia',
    value: 'Pedagogia',
  },
  {
    label: 'Psicologia',
    value: 'Psicologia',
  },
  {
    label: 'Química',
    value: 'Química',
  },
  {
    label: 'Química',
    value: 'Química',
  },
  {
    label: 'Relações Internacionais',
    value: 'Relações Internacionais',
  },
  {
    label: 'Relações Públicas',
    value: 'Relações Públicas',
  },
  {
    label: 'Sistemas de Informação',
    value: 'Sistemas de Informação',
  },
  {
    label: 'Serviço Social',
    value: 'Serviço Social',
  },
  {
    label: 'Teatro',
    value: 'Teatro',
  },
  {
    label: 'Zootecnia',
    value: 'Zootecnia',
  },
];

export { courses };
