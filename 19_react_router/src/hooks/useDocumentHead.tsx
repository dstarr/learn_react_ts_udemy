import { useEffect } from "react";

const useDocumentHead = (title: string, description: string) => {
    useEffect(() => {
      document.title = title;
      
      if(description) {
        let metaDescription = document.querySelector('meta[name="description"]');
        if(!metaDescription) {
          metaDescription = document.createElement('meta');
          metaDescription.setAttribute('name', 'description');
          document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);
      }
      
    }, [title, description]);
  };

export default useDocumentHead;