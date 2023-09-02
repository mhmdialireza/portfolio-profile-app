import { useEffect } from 'react';

type Props = {
  menuRef: any;
  setMenuOpened: any;
};

const useOutsideAlerter = ({ menuRef, setMenuOpened }: Props) => {
  const viewport_width = document.documentElement.clientWidth;
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (viewport_width <= 640) {
          setMenuOpened(false);
        }
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);
};
export default useOutsideAlerter;
