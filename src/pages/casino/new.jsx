useEffect(()=>{
    const token = localStorage.getItem("gameToken");
    CasinoApi.Casino_Gamelist({
      gameCategory: liveCasino,
      provider : providerTag,
      token
    }).then((response)=>{
      if (response?.data?.data?.items?.length)
      {
        const { items } = response.data.data;
        let categories = items.map((el) => {
          const itemAr = el?.category.split("/");
          const lastelm = itemAr[itemAr.length - 1];
          return lastelm;
        });
        const uniqueArrayValues = Array.from(new Set(categories));
        if ( uniqueArrayValues.length) {
          uniqueArrayValues.unshift("ALL");
          const newAr = uniqueArrayValues.filter((el) => el !== "OTHER");
          newAr.push("OTHER");
          setCategory(newAr);
        }
        setGameLists(items);
    }
  })
  }, [providerTag, liveCasino]);