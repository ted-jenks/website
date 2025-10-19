export type PageType = 'HOME' | 'PROJECTS' | 'RESUME' | 'CONTACT';

export interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}