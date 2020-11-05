import { getCategoriesEndpoint, getPlacesEndpoint } from './sightseeingBackend';

export const addpreviewSites = (previewSites) => ({
  type: 'add_preview_sites', previewSites
});

export const addCategories = (siteCategories) => ({
  type: 'add_categories', siteCategories
});

export const checkLoading = (loading) => ({
  type: 'loading', loading
});

export const getCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(checkLoading(true));
      const results = await getCategoriesEndpoint();
      dispatch(addCategories(results));
      dispatch(checkLoading(false));
      return results;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  };
};

export const addToLocalStorage = (category, load, stopLoad) => {
  return async () => {
    try {
      load();
      localStorage.setItem('category', JSON.stringify(category));
      // Fetch all site/places related to selected category
      const results = await getPlacesEndpoint(category.id);
      localStorage.setItem('places', JSON.stringify(results));
      stopLoad();
    } catch (error) {
      console.log(error.message);
    }
  };
};
